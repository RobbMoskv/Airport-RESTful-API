require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const airportRouter = express.Router();
const app = express();
const port = process.env.PORT || 3000;
const Airport = require('./models/AirportModel');

// REMOVE: DB
const dbuser = process.env.DBUSER;
const dbpw = process.env.PW;
const db = process.env.DB;
const url = `mongodb://${dbuser}:${dbpw}@127.0.0.1:27017/${db}`;

mongoose.connect(url, { useNewUrlParser: true }).catch((err) => {
  console.log(`Database connections failed - ${err}`);
});

airportRouter.route('/airports')
  .get((req, res) => {
    Airport.find((err, airports) => {
      if (err) {
        return res.send(err);
      }

      return res.json(airports);
    });
  });

app.use('/api', airportRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Airport API');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
