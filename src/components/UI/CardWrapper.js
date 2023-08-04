import { Wrapper } from './CardWrapper.styled';

const CardWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default CardWrapper;
