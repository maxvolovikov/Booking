/* eslint camelcase: "off" */

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import moment from 'moment';

import Calendar from './components/calendar';
import Guest from './components/guests';
import Book from './components/book';
import Reviews from './components/reviews';
import Price from './components/price';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      customerId: this.chooseRandom(15),
      guestCount: 1,
      daysBooked: 1,
      startDate: null,
      endDate: null,
      focusedInput: null,
      total: 0,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentDidMount() {
    fetch(`/rooms/${this.chooseRandom(5)}`)
      .then(res => res.json())
      .then((listing) => { this.setState(listing); })
      .then(() => { this.handleTotalChange(); })
      .catch((err) => { throw err; });
  }

  chooseRandom(max) {
    this.rand = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    return this.rand;
  }

  handleGuestCountChange(newCount) {
    this.setState({
      guestCount: newCount,
    });

    this.handleTotalChange();
  }

  handleDatesChange(val) {
    const { startDate, endDate } = val;
    const days = moment(endDate).diff(startDate, 'days');
    this.setState({ startDate, endDate, daysBooked: days });
    this.handleTotalChange();
  }

  handleTotalChange() {
    const {
      cleaning_fee,
      service_fee,
      guestCount,
      day_rate,
      daysBooked,
    } = this.state;

    const newTotal = (day_rate * guestCount * daysBooked) + cleaning_fee + service_fee;

    this.setState({
      total: newTotal,
    });
  }

  handleFocusChange(val) {
    this.setState({
      focusedInput: val,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const {
      id,
      customerId,
      startDate,
      endDate,
      total,
    } = this.state;

    this.booking = {
      listing_id: id,
      customer_id: customerId,
      start_date: moment(startDate).format(),
      end_date: moment(endDate).format(),
      total_cost: total,
      host_booking: false,
    };

    fetch('/booking', {
      method: 'POST',
      body: JSON.stringify(this.booking),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => { console.log('Booking was successful!'); })
      .catch((err) => { throw err; });
  }

  render() {
    const {
      review_count,
      max_guests,
      guestCount,
      startDate,
      endDate,
      focusedInput,
      total,
    } = this.state;

    return (
      <div className="container">
        <Price {...this.state} handleTotalChange={this.handleTotalChange} />
        <Reviews reviews={review_count} />
        <Calendar
          focusedInput={focusedInput}
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          handleDatesChange={this.handleDatesChange}
          handleFocusChange={this.handleFocusChange}
        />
        <Guest
          maxGuests={max_guests}
          guestCount={guestCount}
          handleGuestCountChange={this.handleGuestCountChange}
        />
        <Book total={total} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
