const pg = require('pg');

const connection = "postgress://@localhost:5432/listings";
const db = new pg.Client(connection);

db.connect();

const users = 
`CREATE TABLE IF NOT EXISTS users (
  id bigint PRIMARY KEY,
  ssn varchar
)`;

const csvUsersSeed = `COPY users FROM '/Users/maxvolovikov/hrr/sdc/Booking/db/seed10m/users.csv' WITH (FORMAT csv)`;

const createUsers = () => {
  db.query(users)
    .then((res) => {
      console.log(res, 'users table created');
    })
    .catch((err) => {
      console.log(err, 'error creating users table');
    });
};

const seedUsers = () => {
  db.query(csvUsersSeed)
    .then((res)=>{
      console.log(res, 'users table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding users table');
    });
};

createUsers();
seedUsers();

const customers = 
`CREATE TABLE IF NOT EXISTS customers (
  id bigint PRIMARY KEY, 
  ssn varchar
)`;

const csvCustomersSeed = `COPY customers FROM '/Users/maxvolovikov/hrr/sdc/Booking/db/seed10m/customers.csv' WITH (FORMAT csv)`;

const createCustomers = () => {
  db.query(customers)
    .then((res) => {
      console.log(res, 'Customers table created');
    })
    .catch((err) => {
      console.log(err, 'error creating Customers table');
    });
};

const seedCustomers = () => {
  db.query(csvCustomersSeed)
    .then((res)=>{
      console.log(res, 'Customers table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding Customers table');
    });
};

createCustomers();
seedCustomers();

const listings = 
`CREATE TABLE IF NOT EXISTS customers (
  id bigint PRIMARY KEY, 
  owner bigint,
  review_count bigint,
  average_review bigint,
  day_rate bigint,
  service_fee bigint,
  cleaning_fee bigint,
  max_guests bigint   
)`;

const csvListingsSeed = `COPY listings FROM '/Users/maxvolovikov/hrr/sdc/Booking/db/seed10m/listings.csv' WITH (FORMAT csv)`;

const createListings = () => {
  db.query(listings)
    .then((res) => {
      console.log(res, 'listings table created');
    })
    .catch((err) => {
      console.log(err, 'error creating listings table');
    });
};

const seedListings = () => {
  db.query(csvListingsSeed)
    .then((res)=>{
      console.log(res, 'Listings table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding Listings table');
    });
};

createListings();
seedListings();
