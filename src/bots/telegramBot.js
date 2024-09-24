require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const UserController = require('../controllers/userController');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const usernameTg = msg.chat.first_name;

    const user = await UserController.userSessionInit({ chatId, usernameTg });

    await bot.sendMessage(msg.chat.id, 'Welcome to Heroe\'s Path bot');
    await bot.sendMessage(msg.chat.id, 'Do you think you know yourself?');
    await bot.sendMessage(msg.chat.id, `Your name is ${user.dataValues.username}`);
});

bot.onText(/\/createskill/, async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(msg.chat.id, `Your: ${chatId}`);
    await bot.sendMessage(msg.chat.id, 'Skill creation init:');
});
module.exports = bot;
