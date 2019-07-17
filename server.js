const express = require('express');
const Sequelize = require('sequelize');
const quotesController = require('./controllers/quotes');
const db = require('./models');

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', err);
  }
})();

const app = express();

const quotesRouter = express.Router();
quotesRouter.get("/", quotesController.findAll);

app.use("/api/quotes", quotesRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
