require('dotenv').config();

const cors          = require('cors');
const express       = require('express');
const sequelize     = require('./configs/database.js');
const telegramBot   = require('./bots/telegramBot.js');
const discordBot    = require('./bots/discordBot.js');
const userRouter    = require('./routes/userRoutes.js');

const app           = express();

app.use(cors());
app.use(express.json());

app.use( (req, res, next) => {
    res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
    next();
});

app.use('/api', userRouter);

app.get('/', (req,res) => {
    console.log(req);
    res.send('[App]: Heroe\'s Path bot is running');
});

module.exports = app;
