const Models = require('../models/index.js');
const seedData = require('../seeders/data.js');
const db = require('../index.js');

const User = Models.User;
const Listing = Models.Listing;
const Customer = Models.Customer;
const Booking = Models.Booking;

const insertSampleData = () => {
  db.sync()
    .then(() => {
      return User.bulkCreate(seedData.users);
    })
    .then(() => {
      return Listing.bulkCreate(seedData.listings);
    })
    .then(() => {
      return Customer.bulkCreate(seedData.customers);
    })
    .then(() => {
      return Booking.bulkCreate(seedData.bookings);
    })
    .then(() =>{
      db.close();
    })
    .catch((err) => {
      console.log(err)
      db.close();
    })
};

insertSampleData();