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
      total: 0,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
  }

  componentDidMount() {
    fetch(`/rooms/${this.chooseRandom(5)}`)
      .then(res => res.json())
      .then((listing) => {
        this.updateState(listing);
      })
      .catch((err) => { throw err; });
  }

  handleCalendarChange() {
    //TODO: update state
  }

  handleGuestCountChange() {
    
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

  buildBookingObject() {
    // TODO: create an object to pass into POST request
  }

  updateState(listing) {
    this.setState(listing);
  }

  chooseRandom(max) {
    this.rand = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    return this.rand;
  }

  render() {
    const {
      day_rate,
      service_fee,
      cleaning_fee,
      review_count,
      start_date,
      end_date,
      max_guests,
    } = this.state;

    this.rates = {
      rate: day_rate,
      service: service_fee,
      cleaning: cleaning_fee,
    };

    return (
      <div>
        <Price rates={this.rates} total={}/>
        <Reviews reviews={review_count} />
        <Calendar start={start_date} end={end_date} />
        <Guest guests={max_guests} handleGuestCountChange={this.handleGuestCountChange} />
        <Book handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
