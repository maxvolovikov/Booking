const express = require('express');
const path = require('path');
const db = require('../db/controllers/index');
const pgdb = require('../db/seed10m/pgindex.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(express.json());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
});

app.get('/rooms/:id', pgdb.getSingleListing);

// app.get('/rooms/:lId', (req, res) => {
//   db.listing.get(req.params.lId)
//     .then((data) => {
//       if (data) {
//         console.log('ROOMS', data);
//         res.send(data).end();
//       } else {
//         res.status(404).send('No listing found').end();
//       }
//     })
//     .catch((err) => {
//       console.error('Error: GET Req', err);
//       res.status(500).send(`Response Error getting listing ${req.params.lId}`).end();
//     });
// });

app.get('/users/:uId', (req, res) => {
  db.user.get(req.params.uId)
    .then((data) => {
      console.log('USERS', data);
      if (data) {
        res.send(data.name).end();
      } else {
        res.send('User not found').end();
      }
    })
    .catch((err) => { throw err; });
});

app.get('/customers/:cId', (req, res) => {
  db.customer.get(req.params.cId)
    .then((data) => {
      console.log('CUSTOMER', data);
      if (data) {
        res.send(data.name).end();
      } else {
        res.send('Customer not found').end();
      }
    })
    .catch((err) => { throw err; });
});

app.post('/rooms/:lId', (req, res) => {
  db.listing.create({
    id: req.params.lId,
    oid: req.params.oid,
    rc: req.params.rc,
    ar: req.params.ar,
    dr: req.params.dr,
    sf: req.params.sf,
    cf: req.params.cf,
    mg: req.params.mg,
  }).then(() => {
    res.send('Listing successfully created!').end();
  }).catch(() => {
    res.status(500).send('Could not create Listing. Please try again').end();
  });
});

app.put('/rooms/:lId', (req, res) => {
  db.listing.update(
    { cf: req.body.cf },
    { dr: req.body.dr },
    { mg: req.body.mg },
    { rc: req.body.rc },
  ).then(() => {
    res.send('Listing successfully updated!').end();
  }).catch(() => {
    res.status(500).send('Could not update Listing. Please try again').end();
  });
});

app.delete('/rooms/:lId', (req, res) => {
  db.listing.destroy({
    where: {
      id: req.params.lId,
    },
  }).then(() => {
    res.send('Listing successfully deleted!').end();
  }).catch(() => {
    res.status(500).send('Could not delete listing. Please try again').end();
  });
});

app.post('/booking', (req, res) => {
  db.booking.set(req.body)
    .then(() => { res.send('Booking successful. Enjoy!').end(); })
    .catch(() => { res.status(500).send('Could not create booking. Please try again').end(); });
});

module.exports = app;
