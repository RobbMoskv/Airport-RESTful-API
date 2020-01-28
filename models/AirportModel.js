const mongoose = require('mongoose');

const { Schema } = mongoose;

// Airport Model
const AirportModel = new Schema({
  code: { type: String },
  lat: { type: String },
  lon: { type: String },
  name: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  woeid: { type: String },
  tz: { type: String },
  phone: { type: String },
  type: { type: String },
  email: { type: String },
  url: { type: String },
  runway_length: { type: String },
  elev: { type: String },
  icao: { type: String },
  direct_flights: { type: String },
  carriers: { type: String }
});

module.exports = mongoose.model('Airport', AirportModel);
