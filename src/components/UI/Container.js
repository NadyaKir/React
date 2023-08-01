import { Wrapper } from './Container.styled';

const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
