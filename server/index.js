const express = require('express');
const path = require('path');
const controller = require('../db/controllers/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(express.json());

app.get('/rooms/:listingId', (req, res) => {
  controller.get(req.params.listingId)
    .then((data) => {
      if (data) res.send(data).end();
      res.send('No listing found').end();
    })
    .catch((err) => {
      console.error('Error: GET Req', err);
      res.send(`Response Error getting listing ${req.params.listingId}`).end();
    });
});

app.post('/bookings/:bookingId', (req, res) => {
  controller.set(req.query, req.params.bookingId)
    .then(() => { res.send('Booking successful. Enjoy!').end(); })
    .catch(() => { res.send('Could not create booking. Please try again').end(); });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
