import React from 'react';
import PropTypes from 'prop-types';

const Guests = ({ handleGuestCountChange, maxGuests, guestCount }) => {
  const options = [];
  const handleChange = (e) => {
    handleGuestCountChange(parseInt(e.target.value, 10));
  };

  for (let i = 1; i <= maxGuests;) {
    options.push(<option key={i} value={i}>{i}</option>);
    i += 1;
  }

  return (
    <div>
      <h3>Guests App</h3>
      <select className="guest-dropdown" onChange={handleChange} value={guestCount}>
        {options}
      </select>
    </div>
  );
};

Guests.propTypes = {
  maxGuests: PropTypes.number,
  guestCount: PropTypes.number,
  handleGuestCountChange: PropTypes.func,
};

Guests.defaultProps = {
  maxGuests: 1,
  guestCount: 1,
  handleGuestCountChange: () => {},
};

export default Guests;
