require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Airport = require('./models/AirportModel');
const airportRouter = require('./router/airportRoutes')(Airport);

const app = express();
const port = process.env.PORT || 3000;

// REMOVE: DB
const dbuser = process.env.DBUSER;
const dbpw = process.env.PW;
const db = process.env.DB;
const url = `mongodb://${dbuser}:${dbpw}@127.0.0.1:27017/${db}`;

mongoose.connect(url, { useNewUrlParser: true }).catch((err) => {
  console.log(`Database connections failed - ${err}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', airportRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Airport API');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
