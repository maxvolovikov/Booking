import React from 'react';
import ReactDOM from 'react-dom';

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
      </div>
    );
  }
}

ReactDOM.render(<Booking />, document.getElementById('booking'));
