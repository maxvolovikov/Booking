/*eslint-disable*/
import React from 'react';
import fetch from 'node-fetch';
import moment from 'moment';
import '../../public/style.css';
import Calendar from './calendar';
import Guest from './guests';
import Book from './book';
import Reviews from './reviews';
import Price from './price';
import Subtotal from './subtotal';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      customerId: this.chooseRandom(1, 200),
      guestCount: 1,
      daysBooked: 0,
      startDate: null,
      endDate: null,
      focusedInput: null,
      total: 0,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentDidMount() {
    const id = Number(window.location.pathname.replace(/\//, ''));
    fetch(`http://localhost:3002/rooms/${id}`)
      .then(res => res.json())
      .then((listing) => {
        console.log('LISTING =====================>', listing.data);
        const room = listing.data;
        room.day_rate = Number(room.day_rate);
        room.review_count = Number(room.review_count);
        room.max_guests = Number(room.max_guests);
        this.setState(room);
      })
      .catch((err) => { throw err; });
  }

  chooseRandom(min, max) {
    this.rand = Math.floor(Math.random() * (max - min + 1) + min);
    return this.rand;
  }

  handleGuestCountChange(newCount) {
    const {
      day_rate,
      daysBooked,
      cleaning_fee,
      service_fee,
    } = this.state;

    this.setState({
      guestCount: newCount,
      total: ((day_rate * daysBooked) + cleaning_fee + service_fee) * newCount,
    });
  }

  handleDatesChange(val) {
    const {
      day_rate,
      cleaning_fee,
      service_fee,
      guestCount,
    } = this.state;
    const { startDate, endDate } = val;
    const days = moment(endDate).diff(startDate, 'days');

    this.setState({
      startDate,
      endDate,
      daysBooked: days || 1,
      total: ((day_rate * days) + cleaning_fee + service_fee) * guestCount,
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
    console.log(this.booking);

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
      stars,
      day_rate,
      daysBooked,
    } = this.state;

    return (
      <div className="container">
        <div className="price-review">
          <Price day_rate={day_rate} />
          <Reviews reviews={review_count} stars={stars} />
        </div>
        <Calendar
          focusedInputData={focusedInput}
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
        {total > 0 && daysBooked > 0 ? <Subtotal {...this.state} /> : null}
        <Book total={total} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Booking;
