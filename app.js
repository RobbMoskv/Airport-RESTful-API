require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const Airport = require('./models/AirportModel');
const airportRouter = require('./router/airportRoutes')(Airport);

const openapispec = YAML.load('./openapidoc.yaml');
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

// REST API's
app.use('/api', airportRouter);

// OpenAPI Documentation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapispec));

app.get('/', (req, res) => {
  res.send('Welcome to the Airport API');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
