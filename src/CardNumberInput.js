import React from 'react';

class CardNumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.format(this.props.cardNumber)
    }

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    })
  }
  format(value) {
    if (!value) return '';
    let data = value.toString();
    data = data.replace(/ /g, '').replace(/(.{4})/g, '$1 ').trim();
    return data;
  }
  normalize(value) {
    let data = value;
    return data.replace(/ /g, '');
  }
  handleChange(e) {
    this.props.onChange(this.normalize(e.target.value));
  }
  render() {
    const {
      number
    } = this.state;
    return (
      <input type="text"
        value={ number }
        onChange={ this.handleChange } />
    )
  }
}

export default CardNumberInput;
