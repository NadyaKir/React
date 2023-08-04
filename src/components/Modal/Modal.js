import React from 'react';
import styled from 'styled-components';

import { Button } from '../UI/Button.styled';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fffff0;
  padding: 20px;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Modal = ({ children, closeModal }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        {children}
        <Button cancel="true" onClick={closeModal}>
          Закрыть
        </Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
