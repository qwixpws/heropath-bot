const User = require('../models/User');

const UserController = {
    userSessionInit: async (req, res) => {
        try {
            let { chatId, usernameTg } = req;
            let userId = chatId.toString();
            const user = await User.findOne({
                where: { telegram_id: userId }
            });
            if (res)
                res.status(200).json(user);
            return user;
        } catch (error) {
            if (res)
                res.status(401).error('[UserController.userSessionInit()]: An error occured: ', error);
            else
                console.error('[UserController.userSessionInit()]: An error occured: ', error);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ error: '[UserController.getAllUsers()]: An error occured: ', err: err });
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ error: '[UserController.createUser()]: An error occured: ', err: err });
        }
    },
};

module.exports = UserController;
