import React from "react";

import CardWrapper from "../UI/CardWrapper";
import { ModalWrapper } from "./Modal.styled";

const Modal = ({ children, closeModal }) => {
  return (
    <ModalWrapper onClick={closeModal}>
      <CardWrapper>{children}</CardWrapper>
    </ModalWrapper>
  );
};

export default Modal;
