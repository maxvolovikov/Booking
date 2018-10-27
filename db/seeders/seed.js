const {
  User,
  Listing,
  Customer,
  Booking,
} = require('../models/index.js');
const seedData = require('../seeders/data.js');
const db = require('../index.js');

const insertSampleData = () => {
  db.sync()
    .then(() => User.bulkCreate(seedData.users))
    .then(() => Listing.bulkCreate(seedData.listings))
    .then(() => Customer.bulkCreate(seedData.customers))
    .then(() => Booking.bulkCreate(seedData.bookings))
    .then(() => db.close())
    .catch((err) => {
      db.close();
      throw err.parent;
    });
};

insertSampleData();
