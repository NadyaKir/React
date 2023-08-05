import React from 'react';

import CardWrapper from '../UI/CardWrapper';
import { ModalWrapper } from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  const handleWrapperClick = (e) => {
    // Проверяем, был ли клик на самом модальном окне (ModalWrapper)
    // Если да, тогда закрывать модальное окно, если нет - не закрывать
    if (e.target === e.currentTarget) {
      console.log(e.target, e.currentTarget)
      closeModal();
    }
  }

  return (
    <ModalWrapper onClick={handleWrapperClick}>
      <CardWrapper >{children}</CardWrapper>
    </ModalWrapper>
  );
};

export default Modal;
