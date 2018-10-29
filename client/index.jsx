import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar';

class Booking extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <Calendar />
      </div>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
