import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') return this.props.onClose();
  };

  handleClickOnBackdrop = e => {
    if (e.target === e.currentTarget) return this.props.onClose();
  };

  render() {
    const { modalUrl, tag } = this.props;

    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalWindow>
          <img src={modalUrl} alt={tag} />
        </ModalWindow>
      </Overlay>
    );
  }
}
