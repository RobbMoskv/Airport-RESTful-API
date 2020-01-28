require('dotenv').config();

const express = require('express');

const airportRouter = express.Router();
const app = express();
const port = process.env.PORT || 3000;


airportRouter.route('/airports')
  .get((req, res) => {
    const response = { hello: 'Hi from API' };
    res.json(response);
  });

app.use('/api', airportRouter);

app.get('/', (req, res) => {
  res.send('Welcome Gentleman');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
