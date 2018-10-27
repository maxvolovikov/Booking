const express = require('express');
const db = require('../db/index.js')
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/rooms/:listingId', (req, res) => {
  //TODO: Setup GET req to db
})

app.post('/bookings/:bookingId', (req, res) => {
  //TODO: Setup POST req to DB
})

app.listen(port, () => { console.log(`Listening on port ${port}`)})

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