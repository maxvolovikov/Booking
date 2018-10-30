import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => (
  <div>
    <h3>Reviews Display</h3>
    {reviews}
  </div>
);

Reviews.propType = {
  reviews: PropTypes.number,
};

export default Reviews;
