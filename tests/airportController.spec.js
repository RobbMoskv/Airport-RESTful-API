const should = require('should');
const sinon = require('sinon');
const airportController = require('../controllers/airportController');

describe('Airport Controller', () => {
  describe('GetAll', () => {

  });

  describe('GetSingle', () => {

  });

  describe('Post', () => {
    it('should not allow empty Name on post', () => {
      // eslint-disable-next-line func-names
      const Airport = function () { this.save = () => {}};

      const req = {
        body: {
          country: 'Germany',
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy(),
      };

      const controller = airportController(Airport);
      controller.post(req, res);

      // Should throw a 'Bad Request'
      res.status.calledWith(400).should.equal(true, `Incorrect Status: ${res.status.args[0][0]}`);
      // Return error message
      res.send.calledWith('Name is required').should.equal(true);
    });
  });
});
