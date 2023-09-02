import React from 'react';

import CardWrapper from '../UI/CardWrapper';
import { ModalWrapper } from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalWrapper onClick={closeModal}>
      <CardWrapper onClick={stopPropagation}>{children}</CardWrapper>
    </ModalWrapper>
  );
};

export default Modal;
