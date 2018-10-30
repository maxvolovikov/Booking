import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => (
  <div>
    <h3>Reviews Display</h3>
    {reviews}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.number,
};

Reviews.defaultProps = {
  reviews: 0,
};

export default Reviews;
