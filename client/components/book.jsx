import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ handleOnSubmit }) => (
  <div>
    <h3>Book Button</h3>
    <button type="submit" onClick={handleOnSubmit}>Book</button>
  </div>
);

Book.propTypes = {
  handleOnSubmit: PropTypes.func,
};

export default Book;
