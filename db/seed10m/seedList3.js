const fs = require('fs');
const stringify = require('csv-stringify');

const listArr = [];
const numGen = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;

for (let i = 4000001; i <= 6000000; i += 1) {
  listArr.push({
    id: i,
    o: numGen(1, 10000),
    rc: numGen(0, 400),
    ar: numGen(1, 5),
    dr: numGen(50, 1000),
    sf: numGen(0, 150),
    cf: numGen(0, 150),
    mg: numGen(1, 20),   
  });
}

stringify(listArr, (err, result) => {
  fs.appendFile('db/seed10m/listings.csv', result, err => {
    if (err) {
      console.log(err);
    }
    console.log('added 6mil records to listings.csv');
  });
});
