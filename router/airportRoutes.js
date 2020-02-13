/* eslint-disable no-param-reassign */
const express = require('express');
const airportController = require('../controllers/airportController');

function routes(Airport) {
  const airportRouter = express.Router();
  const controller = airportController(Airport);

  // All airports
  airportRouter.route('/airports')
    .get(controller.getAll)
    .post(controller.post);

  // Single Airport
  airportRouter.use('/airports/:id', controller.middleware);
  airportRouter.route('/airports/:id')
    .get(controller.getSingle)
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.remove);

  return airportRouter;
}

module.exports = routes;
