import { useDispatch, useSelector } from 'react-redux';

import { loginActions } from '../../store';

import {
  HeaderWrapper,
  HeaderLogo,
  HeaderLink,
  ImgLogo,
  BadgeBlock,
  Badge,
  UserText,
  LoggedInBlock,
  HeaderUsername,
} from './Header.styled';

import headerLogo from './header-logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) => state.cards.itemsCount);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const username = useSelector((state) => state.login.username);
  const isAdmin = useSelector((state) => state.login.isAdmin);

  const handleLogout = () => {
    dispatch(loginActions.setLogin({ isLoggedIn: false, isAdmin: false }));
  };

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <ImgLogo src={headerLogo} alt="Cute sleeping cat" />
      </HeaderLogo>
      <HeaderLink to="">Home</HeaderLink>

      {isLoggedIn ? (
        <LoggedInBlock>
          <UserText>
            Welcome, <HeaderUsername>{username}</HeaderUsername>
          </UserText>
          {isAdmin && <HeaderLink to="settings">Settings</HeaderLink>}
          <HeaderLink onClick={handleLogout}>Logout</HeaderLink>
        </LoggedInBlock>
      ) : (
        <HeaderLink to="signin">Sign in</HeaderLink>
      )}
      <BadgeBlock>
        <p>Cards amount:</p>
        <Badge>{itemsCount}</Badge>
      </BadgeBlock>
    </HeaderWrapper>
  );
};

export default Header;
