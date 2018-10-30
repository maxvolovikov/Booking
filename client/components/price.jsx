import React from 'react';
import PropTypes from 'prop-types';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      days: 1,
      guests: 1,
    };
  }

  componentDidUpdate() {
    this.updateTotal();
  }

  updateTotal() {
    const { rates } = this.props;
    const { days, guests } = this.state;
    const newTotal = rates.cleaning + rates.service + (rates.rate * guests * days);

    this.setState({
      total: newTotal,
    });
  }

  render() {
    const { total } = this.state;
    const { rates } = this.props;

    console.log(rates);

    return (
      <div>
        <h3>Price Display</h3>
        <p>
        Fees
        </p>
        <p>
          Cleaning: $
          {rates.cleaning}
        </p>
        <p>
          Service: $
          {rates.service}
        </p>
        <b>Total: </b>
        $
        {total}
      </div>
    );
  }
}

Price.propTypes = {
  rates: PropTypes.object,
};

export default Price;
