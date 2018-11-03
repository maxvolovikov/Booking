/* eslint-disable no-unused-expressions */

import React from 'react';
import { DateRangePicker } from 'react-dates';
import Adapter from 'enzyme-adapter-react-16';
import {
  shallow,
  render,
  mount,
  configure,
} from 'enzyme';

// import sinon from 'sinon';
import { expect } from 'chai';

import Book from '../client/components/book';
import Booking from '../client/components/booking';
import Calendar from '../client/components/calendar';
import Guests from '../client/components/guests';
import Price from '../client/components/price';
import Reviews from '../client/components/reviews';


configure({ adapter: new Adapter() });

describe('<Booking />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Booking />);
  });

  it('contains Book, Calendar, Guest, Price, and Review components', () => {
    expect(w.contains(Book)).to.be.true;
    expect(w.contains(Calendar)).to.be.true;
    expect(w.contains(Guests)).to.be.true;
    expect(w.contains(Price)).to.be.true;
    expect(w.contains(Reviews)).to.be.true;
  });
});

describe('<Calendar />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Calendar
      startDateId="start-date"
      endDateId="end-date"
      handleDatesChange={() => {}}
      handleFocusChange={() => {}}
    />);
  });

  it('has DateRangePicker component', () => {
    expect(w.contains(DateRangePicker)).to.be.true;
  });
});

describe('<Book />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Book />);
  });

  it('has Book Button', () => {
    expect(wrapper.find('button').hasClass('book-button')).to.equal(true);
  });

  it('is passed a handleOnSubmit props function', () => {
    expect(wrapper.props().handleOnSubmit).to.be.a('function');
  });

  // it('has clickable Button which triggers handleOnSubmit function', () => {
  // });
});

describe('<Guests />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Guests />);
  });

  it('has guest dropdown menu', () => {
    expect(w.find('.guest-dropdown')).to.have.lengthOf(1);
  });
});
