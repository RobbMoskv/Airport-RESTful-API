const express = require('express');

function routes(Airport) {
  const airportRouter = express.Router();

  airportRouter.route('/airports')
    .get((req, res) => {
      // Filtering
      const query = {};
      if (req.query.country) {
        query.country = req.query.country;
      }

      Airport.find(query, (err, airports) => {
        if (err) {
          return res.send(err);
        }

        return res.json(airports);
      });
    })
    .post((req, res) => {
      const airport = new Airport(req.body);
      airport.save();

      return res.status(201).json(airport);
    });

  // Single Airport
  airportRouter.route('/airports/:id')
    .get((req, res) => {
      Airport.findById(req.params.id, (err, airport) => {
        if (err) {
          return res.send(err);
        }

        return res.json(airport);
      });
    });

  return airportRouter;
}

module.exports = routes;
