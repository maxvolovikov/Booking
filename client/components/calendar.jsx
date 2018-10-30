import React from 'react';
import Cal from 'react-calendar';
import PropTypes from 'prop-types';

const Calendar = ({ start, handleCalendarChange }) => {
  const onChange = (val) => {
    handleCalendarChange(val);
  };

  return (
    <div>
      <h3>Calendar App</h3>
      <Cal
        onChange={onChange}
        value={start}
        selectRange
      />
    </div>
  );
};

Calendar.propTypes = {
  start: PropTypes.instanceOf(Date),
  handleCalendarChange: PropTypes.func,
};

Calendar.defaultProps = {
  start: new Date(),
  handleCalendarChange: () => {},
};

export default Calendar;
