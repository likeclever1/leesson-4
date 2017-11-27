import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props) {
    super();

    this.state = {
      selectedChild: 0

    };

    this.handleChangeChild = this.handleChangeChild.bind(this);
  }
  handleChangeChild(e) {
    const parsedId = parseInt(e.target.getAttribute('data-id'), 10);

    this.setState({
      selectedChild: parsedId
    });
  }
  render() {
    const {
      children
    } = this.props;

    const {
      selectedChild
    } = this.state;

    return (
      <div>
          <nav>
            <ul className="component-list">
            {React.Children.map(
              children,
              (item, index) => (
                <li onClick={this.handleChangeChild}
                  className="component-list__name"
                  data-id={index}>
                  {item.type.displayName
                    ? item.type.displayName
                    : item.type.name}
                </li>
              ))}
            </ul>
          </nav>
          <hr/>
          <div className="component-wrapper">
            {React.Children.toArray(children)[selectedChild]}
          </div>
      </div>
    )
  }
}

export default Switcher;
