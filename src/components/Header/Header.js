import { useDispatch, useSelector } from 'react-redux';

import { cardsActions, loginActions } from '../../store';

import {
  HeaderWrapper,
  HeaderLogo,
  NavBlock,
  HeaderLink,
  ImgLogo,
  BadgeBlock,
  Badge,
  LoggedInBlock,
  HeaderUsername,
} from './Header.styled';
import Container from '../UI/Container';

import headerLogo from './header-logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) => state.cards.itemsCount);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const username = useSelector((state) => state.login.username);
  const isAdmin = useSelector((state) => state.login.isAdmin);

  const handleLogout = () => {
    dispatch(loginActions.setLogin({ isLoggedIn: false, isAdmin: false }));
    dispatch(cardsActions.setReadOnly({ readOnly: true }));
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderLogo>
          <ImgLogo src={headerLogo} alt="Cute sleeping cat" />
        </HeaderLogo>
        <NavBlock isLoggedIn={isLoggedIn}>
          {isLoggedIn ? (
            <LoggedInBlock>
              <p>
                Welcome, <HeaderUsername>{username}</HeaderUsername>
              </p>
            </LoggedInBlock>
          ) : (
            <>
              <HeaderLink to="signin">Sign in</HeaderLink>
            </>
          )}
          <HeaderLink to="">Home</HeaderLink>
          {isAdmin && <HeaderLink to="settings">Settings</HeaderLink>}
          {isLoggedIn && <HeaderLink onClick={handleLogout}>Logout</HeaderLink>}
          {isLoggedIn && (
            <BadgeBlock>
              <p>Cards amount:</p>
              <Badge>{itemsCount}</Badge>
            </BadgeBlock>
          )}
        </NavBlock>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
