import React from 'react';
import PropTypes from 'prop-types';

const Guests = ({ guests, handleGuestCountChange }) => {
  const options = [];

  for (let i = 1; i <= guests;) {
    options.push(<option key={i} value={i} onChange={handleGuestCountChange}>{i}</option>);
    i += 1;
  }

  return (
    <div>
      <h3>Guests App</h3>
      <select>
        {options}
      </select>
    </div>
  );
};

Guests.propTypes = {
  guests: PropTypes.number,
  handleGuestCountChange: PropTypes.func,
};

export default Guests;
