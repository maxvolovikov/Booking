import React from 'react';
// import sinon from 'sinon';
// import { expect } from 'chai';
import { shallow, render, mount } from 'enzyme';
import Booking from '../client/components/booking';
import Book from '../client/components/book';

describe('<Booking />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Book />);
  });

  it('look for something', () => {
    // sinon.spy(Book);
    // const onClick = sinon.spy();
    expect(wrapper.find('button').hasClass('book-buttons')).toBeTruthy();
    // expect(onClick).to.have.property('callCount', 1);
  });

  it('contains book, calendar, guests, price, and reviews components', () => {
    // console.log(wrapper);
  });
});

// it('Booking component exists', (done) => {
//   const wrapper = mount(<Booking />);
//   expect(wrapper).toBeDefined();
//   done();
// });
