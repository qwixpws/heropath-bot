const app = require('./app');
const { sequelize } = require('./configs/database.js');

sequelize.sync()
    .then(() => console.log('[STATUS]: Database synchronized'))
    .catch((err) => console.log('[ERR]: ' + err));

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`[STATUS]: Server is running on port: ${PORT}`);
});
