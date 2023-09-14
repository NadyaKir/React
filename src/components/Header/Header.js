import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderLogo,
  ImgLogo,
  ImgStars,
  Badge,
} from './Header.styled';
import { ItemsContext } from '../../store/context';

import headerLogo from './header-logo.png';
import stars from './stars.png';

const Header = () => {
  const { itemsCount } = useContext(ItemsContext);

  return (
    <HeaderWrapper>
      <ImgStars src={stars} alt="stars" />
      <HeaderLogo>
        <ImgLogo src={headerLogo} alt="Cute sleeping cat" />
      </HeaderLogo>
      <ImgStars src={stars} alt="stars" />
      <Badge>{itemsCount}</Badge>
      <Link to="signin">Sigh in</Link>
    </HeaderWrapper>
  );
};

export default Header;
