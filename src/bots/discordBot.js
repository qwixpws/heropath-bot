require('dotenv').config();
const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages
    ]
});

client.login(process.env.DISCORD_TOKEN);

client.once('ready', () => {
    console.log('[STATUS]: Discord bot is ready');
});

client.on('messageCreate' , message => {
    console.log(`[DS_BOT]: msg: ${messageCreate}`);
    if (message.content === '!start') {
        message.channel.send('Welcome to Heroe\'s Path bot');
    }
});


module.exports = client;
