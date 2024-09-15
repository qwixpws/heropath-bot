require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome to Heroe\'s Path bot');
    bot.sendMessage(msg.chat.id, 'Do you think you know yourself?');
});

module.exports = bot;
