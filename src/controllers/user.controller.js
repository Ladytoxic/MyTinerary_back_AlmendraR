import User from '../model/User.js';

const controllers = {

    // Crear une usuarie
    postUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'User created'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error creating user'
            })
        }
    },

    // Obtener todos les usuaries
    getUsers: async (req, res) => {
        let queries = {}

        if (req.query.name) {
            queries.name = new RegExp(`^${req.query.name}`, 'i');
        }

        try {
            const users = await User.find(queries);
            if (users.length > 0) {
                return res.status(200).json({
                    success: true,
                    users
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No users found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting the users'
            })
        }
    },

    // Obtener une usuarie por el ID
    getUser: async (req, res) => {
        try {
            const oneUser = await User.findById(req.params.id);
            if (oneUser) {
                return res.status(200).json({
                    success: true,
                    users: oneUser
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Id not found'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Failed to get user'
            })
        }

    },

    // Actulizar datos de une Usuarie el ID por pararmentro y los datos actulizados en el body
    updateUser: async (req, res) => {
        try {
            await User.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'Update user'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error update user'
            })
        }
    },

    // Borrar une usuarie pasandole el ID
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'Delete user'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error delete user'
            })
        }

    },
}

export default controllers;