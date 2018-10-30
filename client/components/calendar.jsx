import React from 'react';
import Cal from 'react-calendar';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange(e) {
    this.setState({
      date: e.target.value,
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h3>Calendar App</h3>
        <Cal
          onChange={this.onChange}
          value={date}
        />
      </div>
    );
  }
}

export default Calendar;
