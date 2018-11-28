/* eslint-disable */
const fs = require('fs');
const stringify = require('csv-stringify');

const userArr = [];
const numGen = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

for (let i = 1; i <= 10000; i += 1) {
  const ssn = `${(numGen(0, 999)).pad(3)}-${(numGen(0, 99)).pad(2)}-${(numGen(0, 9999)).pad(4)}`;
  userArr.push({
    id: i,
    ssn,
  });
}

stringify(userArr, (err, result) => {
  fs.appendFile('db/seed10m/users.csv', result, err => {
    if (err) {
      console.log(err);
    }
    console.log('added 10k user records to user.csv');
  });
});
