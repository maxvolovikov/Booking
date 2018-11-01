/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({
  cleaning_fee,
  service_fee,
  guestCount,
  day_rate,
  daysBooked,
  handleTotalChange,
  total,
}) => {
  const newTotal = (day_rate * guestCount * daysBooked) + cleaning_fee + service_fee;

  // if (total !== newTotal) {
  //   handleTotalChange(newTotal);
  // }

  return (
    <div>
      <h3>Price Display</h3>
      <div className="rate">${day_rate} per night</div>
      <div className="fee">Cleaning: ${cleaning_fee}</div>
      <div className="fee">Service: ${service_fee}</div>
      <div className="total">Total: ${newTotal}</div>
    </div>
  );
};

Price.propTypes = {
  day_rate: PropTypes.number,
  cleaning_fee: PropTypes.number,
  service_fee: PropTypes.number,
  guestCount: PropTypes.number,
  daysBooked: PropTypes.number,
  handleTotalChange: PropTypes.func,
  total: PropTypes.number,
};

Price.defaultProps = {
  total: 0,
  day_rate: 0,
  cleaning_fee: 0,
  service_fee: 0,
  guestCount: 0,
  daysBooked: 0,
  handleTotalChange: () => {},
};

export default Price;
