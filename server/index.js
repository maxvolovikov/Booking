const express = require('express');
const path = require('path');
const controller = require('../db/controllers/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(express.json());

app.get('/users/:userId', (req, res) => {
  controller.user.get(req.params.userId)
    .then((data) => {
      if (data) {
        res.send(data.name).end();
      } else {
        res.send('User not found').end();
      }
    })
    .catch((err) => { throw err; });
});

app.get('/customers/:customerId', (req, res) => {
  controller.customer.get(req.params.customerId)
    .then((data) => {
      if (data) {
        res.send(data.name).end();
      } else {
        res.send('Customer not found').end();
      }
    })
    .catch((err) => { throw err; });
});

app.get('/rooms/:listingId', (req, res) => {
  controller.listing.get(req.params.listingId)
    .then((data) => {
      if (data) {
        res.send(data).end();
      } else {
        res.status(404).send('No listing found').end();
      }
    })
    .catch((err) => {
      console.error('Error: GET Req', err);
      res.status(500).send(`Response Error getting listing ${req.params.listingId}`).end();
    });
});

app.post('/bookings/:bookingId', (req, res) => {
  controller.booking.set(req.query, req.params.bookingId)
    .then(() => { res.send('Booking successful. Enjoy!').end(); })
    .catch(() => { res.status(500).send('Could not create booking. Please try again').end(); });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
