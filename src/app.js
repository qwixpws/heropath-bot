require('dotenv').config();

const express       = require('express');
const sequelize     = require('./configs/database.js');
const telegramBot   = require('./bots/telegramBot.js');
const discordBot    = require('./bots/discordBot.js');
const userRouter    = require('./routes/userRoutes.js');

const app           = express();
app.use(express.json());

sequelize.sync()
    .then(() => console.log('[STATUS]: Database synchronized'))
    .catch((err) => console.log('[ERR]: ' + err));

app.use('/api', userRouter);

app.get('/', (req,res) => {
    console.log(req);
    res.send('Heroe\'s Path bot API is running');
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`[STATUS]: Server is running on port: ${PORT}`);
});
