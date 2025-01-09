require('dotenv').config();
const T = require('../test/testClass.js');
const TelegramBot = require('node-telegram-bot-api');
const UserController = require('../controllers/userController');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

const isAdmin = async (userId) => {
    return await UserController.checkUserRole(userId);
}

const userStates = new Map();
const skillData = new Map();
const users = new Map();

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const usernameTg = msg.chat.first_name;
    const userController = getController(chatId, usernameTg);
});

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const usernameTg = msg.chat.first_name;
    const userController = getController(chatId, usernameTg);

    const userLevel = await userController.getUserGlobalLevel();
    userController.level = userLevel;
    //console.log(`[TELEGRAM_BOT]: User level is ${userController.level}`);
    users.set(chatId, userController);

    await bot.sendMessage(msg.chat.id, 'Welcome to Heroe\'s Path bot');
    await bot.sendMessage(msg.chat.id, 'Do you think you know yourself?');
    await bot.sendMessage(msg.chat.id, 'If you scared to know yourself, you will be unable to play the game.');
    await bot.sendMessage(msg.chat.id, `Your id is ${userController.data.telegram_id}`);
    await bot.sendMessage(msg.chat.id, userController.data.telegram_id);
    await bot.sendMessage(msg.chat.id, `Your name is <${userController.data.username}>
    Your level is ${userController.level}`);

    //await bot.sendMessage(msg.chat.id, `Your level is ${users.get(chatId).dataValues.level}`);

});

bot.onText(/\/info/, async (msg) => {
    const chatId = msg.chat.id;
    if (!users.has(chatId)) {
        return;
    }

    const user = users.get(chatId);
    const userLevel = await user.getUserGlobalLevel();
    await bot.sendMessage(msg.chat.id, `Your level is ${userLevel}`);
});

bot.onText(/\/createskill/, async (msg) => {
    const chatId = msg.chat.id;
    userStates.set(chatId, 'skillCreation');
    await bot.sendMessage(msg.chat.id, 'Skill creation init...');
    await bot.sendMessage(msg.chat.id, 'Enter skill name:');
});

bot.onText(/\/description/, async (msg) => {
    await bot.sendMessage(msg.chat.id, 'Enter skill description:');
    userStates.set(chatId, 'skillDescription');

});

bot.onText(/\/finish/, async (msg) => {
    await bot.sendMessage(msg.chat.id, 'Skill creation finished.');
    userStates.delete(chatId);
});

bot.onText(/\/cancel/, async (msg) => {
    const chatId = msg.chat.id;
    if (!userStates.has(chatId)) {
        await bot.sendMessage(msg.chat.id, 'No skill creation in progress.');
        return;
    }
    userStates.delete(chatId);
    skillData.delete(chatId);
    await bot.sendMessage(msg.chat.id, 'Skill creation cancelled.');
});
module.exports = bot;

function getController(chatId, username) {
    if (!users.has(chatId)) {
        const userController = new UserController(chatId, username);
        userController.userSessionInit({ chatId: chatId, username: username });

        users.set(chatId, userController);
    }

    const testUser = new T(users.get(chatId));
    testUser.isType('object').notToBe('null').notToBe('undefined').isInstanceOf(UserController);

    return users.get(chatId);
}
