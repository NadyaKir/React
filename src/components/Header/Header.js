import { useSelector } from 'react-redux';

import {
  HeaderWrapper,
  HeaderLogo,
  HeaderLink,
  ImgLogo,
  ImgStars,
  Badge,
} from './Header.styled';

import headerLogo from './header-logo.png';
import stars from './stars.png';

const Header = () => {
  const itemsCount = useSelector((state) => state.cards.itemsCount);

  return (
    <HeaderWrapper>
      <ImgStars src={stars} alt="stars" />
      <HeaderLogo>
        <ImgLogo src={headerLogo} alt="Cute sleeping cat" />
      </HeaderLogo>
      <ImgStars src={stars} alt="stars" />
      <Badge>{itemsCount}</Badge>
      <HeaderLink to="">Home</HeaderLink>
      <HeaderLink to="signin">Sign in</HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
