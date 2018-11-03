import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => (
  <div className="reviews">
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
