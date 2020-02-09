function airportController(Airport) {
  // Get many airports
  function getAll(req, res) {
    // Filter query
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
  }

  // Get one single airport
  function getSingle(req, res) {
    res.json(req.airport);
  }

  // Post Airports
  function post(req, res) {
    const airport = new Airport(req.body);
    airport.save();

    return res.status(201).json(airport);
  }

  // Update one single airport
  function put(req, res) {
    const { airport } = req;

    airport.code = req.body.code;
    airport.lat = req.body.lat;
    airport.lon = req.body.lon;
    airport.name = req.body.name;
    airport.city = req.body.city;
    airport.state = req.body.state;
    airport.country = req.body.country;
    airport.woeid = req.body.woeid;
    airport.tz = req.body.tz;
    airport.phone = req.body.phone;
    airport.type = req.body.type;
    airport.email = req.body.email;
    airport.url = req.body.url;
    airport.runway_length = req.body.runway_length;
    airport.elev = req.body.elev;
    airport.icao = req.body.icao;
    airport.direct_flights = req.body.direct_flights;
    airport.carriers = req.body.carriers;

    req.airport.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(airport);
    });
  }

  // Update one single airport
  function patch(req, res) {
    const { airport } = req;

    // eslint-disable-next-line no-underscore-dangle
    if (req.body._id) {
      // eslint-disable-next-line no-underscore-dangle
      delete req.body._id;
    }

    // Update all existing attributes in req.body
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      airport[key] = value;
    });

    req.airport.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(airport);
    });
  }

  // Update one single airport
  function remove(req, res) {
    req.airport.remove((err) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  }

  function middleware(req, res, next) {
    Airport.findById(req.params.id, (err, airport) => {
      if (err) {
        return res.send(err);
      }
      if (airport) {
        req.airport = airport;
        return next();
      }
      return res.sendStatus(404);
    });
  }
  // Return functions
  return {
    getAll, getSingle, post, put, patch, remove, middleware
  };
}

module.exports = airportController;
