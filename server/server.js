/*eslint-disable*/
// require('newrelic');
require('dotenv').config();

const app = require('./api');

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
