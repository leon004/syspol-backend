const userService = require('./userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    // Registrar nuevo usuario
    async register(req, res) {
        try {
            const { nombre, apellidoPaterno, apellidoMaterno, usuario, password, rol } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password before storing it

            const newUser = await userService.createUser({
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                usuario,
                password: hashedPassword,
                rol
            });

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Error registering new user", error: error.message });
        }
    },

    // Autenticar usuario
    async authenticate(req, res) {
        try {
            const { usuario, password } = req.body;
            const user = await userService.findUserByUserName(usuario);

            if (!user) {
                return res.status(401).json({ message: "Authentication failed: user not found." });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Authentication failed: incorrect password." });
            }

            const token = jwt.sign({ userId: user.id, role: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: "User authenticated successfully", token });
        } catch (error) {
            res.status(500).json({ message: "Authentication failed", error: error.message });
        }
    },

    // Obtener información del usuario
    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);

            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving user", error: error.message });
        }
    },

    // Actualizar usuario
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedUser = await userService.updateUser(id, updateData);

            if (!updatedUser) {
                return res.status(404).json({ message: "User not found." });
            }

            res.json({ message: "User updated successfully", updatedUser });
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error: error.message });
        }
    },

    // Eliminar usuario
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const deleted = await userService.deleteUser(id);

            if (!deleted) {
                return res.status(404).json({ message: "User not found." });
            }

            res.json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting user", error: error.message });
        }
    }
};

module.exports = userController;
