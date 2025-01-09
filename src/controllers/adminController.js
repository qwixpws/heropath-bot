const User = require('../models/User');
const assert = require('node:assert');

const adminController = {
    GetAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.status(500)
                .json({ error: '[UserController.getAllUsers()]: An error occured: ', err: err });
        }
    }
}
