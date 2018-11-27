const pg = require('pg');

const connection = "postgress://@localhost:5432/airjld";
const db = new pg.Client(connection);

db.connect();

const users = 
`CREATE TABLE IF NOT EXISTS users (
  id bigint PRIMARY KEY,
  ssn varchar
)`;

const csvUsersSeed = `COPY users FROM '/Users/maxvolovikov/hrr/sdc/Booking/db/seed10m/users.csv' WITH (FORMAT csv)`;

const createUsersTable = () => {
  db.query(users)
    .then((res) => {
      console.log(res, 'users table created');
    })
    .catch((err) => {
      console.log(err, 'error creating users table');
    });
};

const seedUsersTable = () => {
  db.query(csvUsersSeed)
    .then((res)=>{
      console.log(res, 'users table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding users table');
    });
};

createUsersTable();
seedUsersTable();

const customers = 
`CREATE TABLE IF NOT EXISTS customers (
  id bigint PRIMARY KEY, 
  ssn varchar
)`;

const csvCustomersSeed = `COPY customers FROM '/Users/maxvolovikov/hrr/sdc/Booking/db/seed10m/customers.csv' WITH (FORMAT csv)`;

const createCustomersTable = () => {
  db.query(customers)
    .then((res) => {
      console.log(res, 'Customers table created');
    })
    .catch((err) => {
      console.log(err, 'error creating Customers table');
    });
};

const seedCustomersTable = () => {
  db.query(csvCustomersSeed)
    .then((res)=>{
      console.log(res, 'Customers table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding Customers table');
    });
};

createCustomersTable();
seedCustomersTable();

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

const createListingsTable = () => {
  db.query(listings)
    .then((res) => {
      console.log(res, 'listings table created');
    })
    .catch((err) => {
      console.log(err, 'error creating listings table');
    });
};

const seedListingsTable = () => {
  db.query(csvListingsSeed)
    .then((res)=>{
      console.log(res, 'Listings table seeded');
    })
    .catch((err) => {
      console.log(err, 'error seeding Listings table');
    });
};

createListingsTable();
seedListingsTable();
