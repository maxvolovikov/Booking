/*eslint-disable */
// const { Pool } = require('pg');  // non local host
const pgp = require('pg-promise')(/*options*/);
// connection string
//var promise = require('bluebird');

// var options = {
//   promiseLib: promise
// };

const connection = "postgres://localhost:5432/airjld";
// new connection
const db = pgp(connection);

function getSingleListing(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('select * from listings where id = $1', id)
    .then(function (data) {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved one listing'
      })
    })
    .catch(function(err) {
      return next(err);
    })
}

module.exports = {
  getSingleListing: getSingleListing,
};