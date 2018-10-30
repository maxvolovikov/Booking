const faker = require('faker');

const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;

module.exports.generate = {
  users: (num) => {
    for (let i = 1; i <= num; i += 1) {
      const user = {};
      user.id = i;
      user.name = faker.name.findName();
      module.exports.users.push(user);
    }
  },
  customers: (num) => {
    for (let i = 1; i <= num; i += 1) {
      const customer = {};
      customer.id = i;
      customer.name = faker.name.findName();
      module.exports.customers.push(customer);
    }
  },
  listings: (num) => {
    for (let i = 1; i <= num; i += 1) {
      const listing = {};
      listing.id = i;
      listing.owner_id = numberGenerator(1, 20);
      listing.review_count = numberGenerator(3, 500);
      listing.day_rate = numberGenerator(45, 500);
      listing.cleaning_fee = numberGenerator(50, 200);
      listing.service_fee = numberGenerator(25, 100);
      listing.max_guests = numberGenerator(1, 15);
      listing.avg_weekly_views = numberGenerator(45, 500);
      listing.avg_monthly_views = numberGenerator(200, 1200);
      listing.total_views = numberGenerator(600, 7800);
      module.exports.listings.push(listing);
    }
  },
  bookings: (num) => {
    for (let i = 1; i <= num; i += 1) {
      const booking = {};
      booking.id = i;
      booking.listing_id = numberGenerator(1, 100);
      booking.customer_id = numberGenerator(1, 15);
      booking.start_date = new Date();
      booking.end_date = new Date();
      booking.total_cost = numberGenerator(150, 1000);
      booking.host_booking = false;
      module.exports.bookings.push(booking);
    }
  },
};

module.exports.users = [];
module.exports.customers = [];
module.exports.listings = [];
module.exports.bookings = [];
