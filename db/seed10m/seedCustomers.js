const fs = require('fs');
const stringify = require('csv-stringify');

const customerArr = [];
const numGen = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;

for (let i = 1; i <= 10000; i += 1) {
  customerArr.push({
    id: i,
  });
}

stringify(customerArr, (err, result) => {
  fs.appendFile('db/seed10m/customers.csv', result, err => {
    if (err) {
      console.log(err);
    }
    console.log('added 10k customers records to customers.csv');
  });
});
