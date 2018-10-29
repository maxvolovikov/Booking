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
  })
    .then(data => data)
    .catch((err) => { throw err; })
  ),
};

module.exports.booking = {
  set: ((data, bookingId) => {
    console.log(data);

    return Booking.create({
      id: bookingId,
      listing_id: data.listingId,
      customer_id: data.customerId,
      start_date: data.start,
      end_date: data.end,
      total_cost: data.total,
      host_booking: data.hostBooking,
    })
      .then(() => {
        console.log(`Booking ID: ${bookingId} saved to the database`);
      })
      .catch((err) => {
        console.error(err.original);
        throw err;
      });
  }),
};

// TODO: set item to database
// breakdown booking object to conform
// to API spec json object shape
//
// build booking object
