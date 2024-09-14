require('dotenv').config();
const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log('[STATUS]: Discord bot is ready');
});

client.on('messageCreate' , message => {
    if (message.content === '!start') {
        message.channel.send('Welcome to Heroe\'s Path bot');
    }
});

client.login(process.env.DISCORD_TOKEN);

module.exports = client;
