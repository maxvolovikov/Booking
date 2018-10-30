/* eslint camelcase: "off" */

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
      startDate: new Date(),
      endDate: {},
      total: 0,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
  }

  componentDidMount() {
    fetch(`/rooms/${this.chooseRandom(5)}`)
      .then(res => res.json())
      .then((listing) => { this.setState(listing); })
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
  }

  handleTotalChange(newTotal) {
    this.setState({
      total: newTotal,
    });
  }

  handleCalendarChange(bookingArray) {
    const daysRange = moment(bookingArray[1]).diff(bookingArray[0], 'days');

    this.setState({
      startDate: bookingArray[0],
      endDate: bookingArray[1],
      daysBooked: daysRange,
    });
  }

  // buildBookingObject() {
  //   // TODO: create an object to pass into POST request
  // }

  handleOnSubmit(e) {
    const {
      id,
      customerId,
      startDate,
      endDate,
      total,
    } = this.state;

    this.booking = {
      id: 0,
      listing_id: id,
      customer_id: customerId,
      start_date: startDate,
      end_date: endDate,
      total_cost: total,
      host_booking: false,
    };

    e.preventDefault();

    // TODO: this should post to bookings without an ID
    // Client does not handle bookingId generation
    // Server (or database) should handle unique identification
    // for bookingId.

    // Client sends booking info
    // this.buildBookingObject();

    fetch('/booking', {
      method: 'POST',
      body: this.booking,
    })
      .then(() => {
        // TODO: After posting, inform client
        // Booking was successful!
      })
      .catch((err) => { throw err; });
  }

  render() {
    const {
      review_count,
      max_guests,
      guestCount,
      startDate,
      endDate,
    } = this.state;

    return (
      <div className="container">
        <Price {...this.state} handleTotalChange={this.handleTotalChange} />
        <Reviews reviews={review_count} />
        <Calendar
          start={startDate}
          end={endDate}
          handleCalendarChange={this.handleCalendarChange}
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
