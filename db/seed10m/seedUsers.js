const fs = require('fs');
const stringify = require('csv-stringify');

const userArr = [];
const numGen = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;

for (let i = 1; i <= 10000; i += 1) {
  userArr.push({
    id: i,
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
