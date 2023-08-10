import { Wrapper } from "./CardWrapper.styled";

const CardWrapper = ({ children }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return <Wrapper onClick={stopPropagation}>{children}</Wrapper>;
};

export default CardWrapper;
