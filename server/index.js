const express = require('express');
const path = require('path');
// const db = require('../db/index.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/rooms/:listingId', (req, res) => {
  // TODO: Setup GET req to db
  // Calls the controller module which issues a getter query
  // to the database asking for a particular listing with id
});

app.post('/bookings/:bookingId', (req, res) => {
  // TODO: Setup POST req to DB
  // Calls the controller module which issues a setter query
  // to the database asking to create a new booking with id
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// GET
// {
//   id:
//   owner:
//   title:
//   availability: [{ start:, end:}, { start:, end:}, ...],
//     views: { weekly:, monthly: total: },
//   cost: { cleaningFee:, serviceFee:, dayRate:, weekRate: },
//   maxGuests:
// }

// POST
// {
//   customerId:
//   listingId:
//   dates: { startDate:, endDate: },
//   cost: { total: }
// }
