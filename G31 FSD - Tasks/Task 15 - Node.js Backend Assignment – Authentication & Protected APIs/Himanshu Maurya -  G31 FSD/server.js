require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = Number(process.env.PORT || 3000);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection established.');

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error.message);
    process.exit(1);
  }
}

startServer();
