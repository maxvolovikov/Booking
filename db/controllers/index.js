const {
  Listing,
  Booking,
} = require('../models/index');

module.exports = {
  get: (listingId) => {
    // TODO: get item from database
    // Search is by listing id so we need to
    // pull listing and owner name
    // build a json object per API spec
    // and return

    // Find listing by id in listings table
    // find owner by id via listing in owner table
    // Error handling on bad retrieval or no listing found
    (Listing.findOne({
      where: {
        id: listingId,
      },
    })
      .then(data => data)
      .catch((err) => { throw err; })
    );
  },
  set: (data, bookingId) => {
    // TODO: set item to database
    // breakdown booking object to conform
    // to API spec json object shape
    //
    // build booking object
    (Booking.create({
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
      })
    );
  },
};
