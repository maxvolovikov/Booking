/* eslint camelcase: "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';

import Calendar from './components/calendar';
import Guest from './components/guests';
import Book from './components/book';
import Reviews from './components/reviews';
import Price from './components/price';


class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      customerId: this.chooseRandom(2),
      guestCount: 1,
      daysBooked: 1,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
  }

  componentDidMount() {
    fetch(`/rooms/${this.chooseRandom(5)}`)
      .then(res => res.json())
      .then((listing) => { this.updateState(listing); })
      .catch((err) => { throw err; });
  }

  handleTotalChange(newTotal) {
    this.setState({
      total: newTotal,
    });
  }

  handleCalendarChange() {
    // TODO: update state
  }

  handleGuestCountChange(newCount) {
    this.setState({
      guestCount: newCount,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    // TODO: this should post to bookings without an ID
    // Client does not handle bookingId generation
    // Server (or database) should handle unique identification
    // for bookingId.

    // Client sends booking info
    // this.buildBookingObject();

    fetch({
      method: 'POST',
      uri: '/booking',
      body: this.state,
    })
      .then(() => {
        // TODO: After posting, inform client
        // Booking was successful!
      })
      .catch((err) => { throw err; });
  }

  // buildBookingObject() {
  //   // TODO: create an object to pass into POST request
  // }

  updateState(listing) {
    this.setState(listing);
  }

  chooseRandom(max) {
    this.rand = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    return this.rand;
  }

  render() {
    const {
      review_count,
      start_date,
      end_date,
      max_guests,
      guestCount,
    } = this.state;
    return (
      <div>
        <Price {...this.state} />
        <Reviews reviews={review_count} />
        <Calendar
          start={start_date}
          end={end_date}
        />
        <Guest
          maxGuests={max_guests}
          guestCount={guestCount}
          handleGuestCountChange={this.handleGuestCountChange}
        />
        <Book handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
