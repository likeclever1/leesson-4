import React from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends React.Component {
  constructor(props) {
    super();

    this.state = {
      cardNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({
      cardNumber: value
    });
  }
  render() {
    return (
      <div>
        <CardNumberInput cardNumber={this.state.cardNumber} onChange={this.handleChange} />
      </div>
    ) 
  }
}

export default CardNumberHolder;
