const Router = require('express').Router;
const Quote = require('../models').Quote;

const quotesRouter = Router();

quotesRouter.route("/").get(async (_, response) => {
  const quotes = await Quote.findAll();
  return response.status(200).json(quotes);
});

module.exports = quotesRouter;
