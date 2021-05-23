const path = require('path');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    username: 'root',
    password: 'root',
    storage: path.join(__dirname, 'database.sqlite'),
});;

const initDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Sequelize was initialized');
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports = {
    sequelize,
    initDB
};
