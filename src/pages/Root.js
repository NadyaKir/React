import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Container from '../components/UI/Container';
import { Wrapper } from '../components/UI/Wrapper.styled';

const RootLayout = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default RootLayout;
