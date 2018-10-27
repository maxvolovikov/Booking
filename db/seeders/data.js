const users = [
  {
    id: 1,
    name: 'John Smith',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

const customers = [
  {
    id: 1,
    name: 'Alice Wonderland',
  },
  {
    id: 2,
    name: 'Bob Ross',
  },
];

const listings = [
  {
    id: 1,
    owner_id: 1,
    review_count: 59,
    day_rate: 162,
    service_fee: 9,
    max_guests: 5,
    avg_weekly_views: 382,
    avg_monthly_views: 236,
    total_views: 3543,
  },
  {
    id: 2,
    owner_id: 2,
    review_count: 18,
    day_rate: 105,
    service_fee: 64,
    max_guests: 5,
    avg_weekly_views: 241,
    avg_monthly_views: 1583,
    total_views: 8137,
  },
  {
    id: 3,
    owner_id: 2,
    review_count: 25,
    day_rate: 159,
    service_fee: 68,
    max_guests: 5,
    avg_weekly_views: 47,
    avg_monthly_views: 508,
    total_views: 853,
  },
  {
    id: 4,
    owner_id: 1,
    review_count: 92,
    day_rate: 81,
    service_fee: 6,
    max_guests: 9,
    avg_weekly_views: 338,
    avg_monthly_views: 628,
    total_views: 6310,
  },
  {
    id: 5,
    owner_id: 1,
    review_count: 8,
    day_rate: 200,
    service_fee: 24,
    max_guests: 3,
    avg_weekly_views: 359,
    avg_monthly_views: 238,
    total_views: 8753,
  },
];

const bookings = [
  {
    id: 1,
    listing_id: 1,
    customer_id: 1,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 100,
    host_booking: false,
  },
  {
    id: 2,
    listing_id: 3,
    customer_id: 2,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 200,
    host_booking: false,
  },
  {
    id: 3,
    listing_id: 2,
    customer_id: 2,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 50,
    host_booking: false,
  },
  {
    id: 4,
    listing_id: 5,
    customer_id: 2,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 250,
    host_booking: false,
  },
  {
    id: 5,
    listing_id: 4,
    customer_id: 1,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 500,
    host_booking: false,
  },
  {
    id: 6,
    listing_id: 2,
    customer_id: 2,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 100,
    host_booking: false,
  },
  {
    id: 7,
    listing_id: 1,
    customer_id: 1,
    start_date: new Date(),
    end_date: new Date(),
    total_cost: 50,
    host_booking: false,
  },
];

module.exports.users = users;
module.exports.customers = customers;
module.exports.bookings = bookings;
module.exports.listings = listings;
