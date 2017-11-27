import React from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isModalShow: false
    }

    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  hideModal() {
    this.setState(state => ({
      isModalShow: false
    }));
  }
  showModal() {
    this.setState(state => ({
      isModalShow: true
    }));
  }
  render() {
    const {
      isModalShow
    } = this.state;

    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        
        {!isModalShow ? null : <Modal domNode={document.querySelector('#portal')}>
          <div className="modal">
            <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно!</h1>
                  <button onClick={this.hideModal}>Закрыть окно</button>
                </div>
              </div> 
          </div>
        </Modal>} 
      </div>
    );
  }
}

export default ModalButton;
