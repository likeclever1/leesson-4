import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    const {
      children,
      domNode
    } = this.props;

    return ReactDOM.createPortal(children, domNode);
  }
}

export default Modal;
