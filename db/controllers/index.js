const {
  Listing,
  Booking,
  User,
  Customer,
} = require('../models/index');

module.exports.user = {
  get: (userId => User.findOne({
    where: {
      id: userId,
    },
  })
    .then(user => user)
    .catch((err) => { throw err; })
  ),
};

module.exports.customer = {
  get: (customerId => Customer.findOne({
    where: {
      id: customerId,
    },
  })
    .then(customer => customer)
    .catch((err) => { throw err; })
  ),
};

module.exports.listing = {
  get: (listingId => Listing.findOne({
    where: {
      id: listingId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  })
    .then(data => data)
    .catch((err) => { throw err; })
  ),
};

module.exports.booking = {
  get: (bookingId => Booking.findOne({
    where: {
      id: bookingId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  })
    .then(data => data)
    .catch((err) => { throw err; })
  ),
  set: ((data) => {
    const booking = {};

    Object.keys(data).forEach((key) => {
      booking[key] = data[key];
    });

    return Booking.create(booking)
      .then(() => {
        console.log('Booking saved to the database');
      })
      .catch(() => {
        console.error('Error: Creating new booking entry');
      });
  }),
};
