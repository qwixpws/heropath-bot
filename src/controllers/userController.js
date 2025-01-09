const T = require('../test/testClass.js');
const User = require('../models/User');
const SkillController = require('./skillController');
const assert = require('node:assert');

const userControllers = [];

class UserController {
    constructor(chatId) {
        this.chatId = Number(chatId);
        this.data = null;
        if (!userControllers.includes(chatId))
            userControllers.push(chatId);
    }

    async userSessionInit({ chatId, username }) {
        const testChatId = new T(chatId);
        const testUsername = new T(username);
        console.log(this.chatId, chatId);
        testChatId.isType('number').notToBe('null').notToBe('undefined').toBe(this.chatId);
        testUsername.isType('string').notToBe('null').notToBe('undefined').lengthIsLess(24).hasNotSpecialChars();
        assert.equal(userControllers.includes(chatId), true);

        try {
            let userId = chatId.toString();
            let user = await User.findOne({
                where: { telegram_id: userId }
            });
            if (!user) {
                user = await User.create({
                    telegram_id: userId,
                    username: username,
                });
            }
            console.log(user);
            this.data = user.dataValues;
            console.log(`[UserController.userSessionInit()]: ${this.data.username} logged in`);
            return user;
        } catch (error) {
            console.error('[UserController.userSessionInit()]: An error occured: ', error);
        }
    }

    async checkUserRole(userId) {
        assert.equal(typeof userId, 'string');
        try {
            const user = await User.findOne({
                where: { telegram_id: userId }
            });
            assert.equal(user, null, 'no user found');
            if (!user)
                user = await User.create({
                    telegram_id: userId,
                    role: 'user'
                })
            if (user.dataValues.role === 'admin')
                return true;
            return false;
        } catch (err) {
            console.error(`ERROR: [UserController:checkUserRole()]: ${err}`);
            return null;
        }
    }

    async createUser(userInfo) {
        try {
            const newUser = await User.create(userInfo);
            return newUser;
        } catch (err) {
            console.error(`ERROR: [UserController:createUser()]: ${err}`);
            return null;
        }
    }

    async getUserInfoApi(req, res) {
        try {
            let userId = chatId.toString();
            let user = await User.findOne({
                where: { telegram_id: userId }
            });
            return user;
        } catch (err) {
            console.error(`ERROR: [UserController:getUserInfo()]: ${err}`);
            return null;
        }
    }

    async createSkill(userId, skillName, description) {
        try {
            const newSkill = await SkillController.createSkill(userId, skillName, description);
            return newSkill;
        } catch (err) {
            console.error(`ERROR: [SkillController:createSkill()]: ${err}`);
            return null;
        }
    }

    async getUserGlobalLevel() {
        try {
            if (!this.data)
                this.data = await User.findOne({
                    where: { telegram_id: this.chatId }
                });
            const userGlobalLevel = calclulateGlobalLevel(this.data.createdAt);

            return userGlobalLevel;
        } catch (err) {
            console.error(`ERROR: [UserController:getUserGlobalLevel()]: ${err}`);
            return null;
        }
    }
};

module.exports = UserController;

const calclulateGlobalLevel = (createdAt) => {
    const timeInSeconds = Math.floor((new Date().getTime() - createdAt.getTime()) / 1000);
    const baseTime = 60 * 60 * 24;
    const scalingFactor = 0.5;
    const globalLevel = Math.log(timeInSeconds / baseTime) * scalingFactor;

    return Math.max(0, Math.floor(globalLevel));
}
