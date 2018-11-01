/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({
  cleaning_fee,
  service_fee,
  day_rate,
  total,
}) => (
  <div className="price-display">
    <h3>Price Display</h3>
    <div className="rate">${day_rate} per night</div>
    <div className="fee">Cleaning: ${cleaning_fee}</div>
    <div className="fee">Service: ${service_fee}</div>
    <div className="total">Total: ${total}</div>
  </div>
);

Price.propTypes = {
  day_rate: PropTypes.number,
  cleaning_fee: PropTypes.number,
  service_fee: PropTypes.number,
  total: PropTypes.number,
};

Price.defaultProps = {
  total: 0,
  day_rate: 0,
  cleaning_fee: 0,
  service_fee: 0,
};

export default Price;
