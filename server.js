const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize('pg_api_test_development', 'fabiano.brito', 'pgapitest', {
  host: 'localhost',
  dialect: 'postgres'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
