/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import controller from '../db/controllers/index';

describe('Database Queries', () => {
  it('calls the database and returns a user based on id', () => {
    const user = controller.user.get(1);
    return user.then((data) => {
      expect(data.name).to.be.a('string');
      expect(data.id).to.equal(1);
    });
  });

  it('calls the database and returns a listing based on id', () => {
    const listing = controller.listing.get(1);
    return listing.then((data) => {
      expect(data.owner_id).to.exist;
      expect(data.id).to.equal(1);
      expect(data.max_guests).to.exist;
    });
  });

  it('calls the database and returns a customer based on id', () => {
    const customer = controller.customer.get(1);
    return customer.then((data) => {
      expect(data.id).to.equal(1);
      expect(data.name).to.be.a('string');
    });
  });

  it('sets a booking to the database', () => {
    // TODO: POST a fake booking to the database
    // look for it, return it, and delete it
    const booking = controller.booking.get(1);
    return booking.then((data) => {
      expect(data.id).to.equal(1);
      expect(data.listing_id).to.exist;
      expect(data.start_date).to.exist;
      expect(data.host_booking).to.be.a('boolean');
    });
  });
});
