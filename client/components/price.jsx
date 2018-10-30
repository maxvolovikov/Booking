/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({
  cleaning_fee,
  service_fee,
  guestCount,
  day_rate,
  daysBooked,
}) => {
  const newTotal = (day_rate * guestCount * daysBooked) + cleaning_fee + service_fee;
  return (
    <div>
      <h3>Price Display</h3>
      <div>${day_rate} per night</div>
      <div>Cleaning: ${cleaning_fee}</div>
      <div>Service: ${service_fee}</div>
      <div><b>Total: ${newTotal}</b></div>
    </div>
  );
};

Price.propTypes = {
  day_rate: PropTypes.number,
  cleaning_fee: PropTypes.number,
  service_fee: PropTypes.number,
  guestCount: PropTypes.number,
  daysBooked: PropTypes.number,
};

Price.defaultProps = {
  day_rate: 0,
  cleaning_fee: 0,
  service_fee: 0,
  guestCount: 0,
  daysBooked: 0,
};

export default Price;
