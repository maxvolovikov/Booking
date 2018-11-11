/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ day_rate }) => (
  <div className="price">
    <div className="rate">
      $
      {day_rate}
      <span className="per-night"> per night</span>
    </div>
  </div>
);

Price.propTypes = {
  day_rate: PropTypes.number,
};

Price.defaultProps = {
  day_rate: 0,
};

export default Price;
