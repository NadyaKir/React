import { Wrapper } from "./CardWrapper.styled";

const CardWrapper = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default CardWrapper;
