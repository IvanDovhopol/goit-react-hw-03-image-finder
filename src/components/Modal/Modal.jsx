import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    modalUrl: PropTypes.string.isRequired,
  };

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
    const { modalUrl } = this.props;

    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalWindow>
          <img src={modalUrl} alt="content" />
        </ModalWindow>
      </Overlay>
    );
  }
}
