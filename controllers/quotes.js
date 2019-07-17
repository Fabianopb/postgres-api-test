const Quote = require('../models').Quote;

module.exports = {
  findAll: async (_, response) => {
    const quotes = await Quote.findAll();
    return response.status(200).json(quotes);
  }
};
