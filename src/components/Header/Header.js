import {
  HeaderWrapper,
  HeaderLogo,
  ImgLogo,
  ImgStars,
  Badge,
} from './Header.styled';

import headerLogo from './header-logo.png';
import stars from './stars.png';

function Header() {
  return (
    <HeaderWrapper>
      <ImgStars src={stars} alt="stars" />
      <HeaderLogo>
        <ImgLogo src={headerLogo} alt="Cute sleeping cat" />
      </HeaderLogo>
      <ImgStars src={stars} alt="stars" />
      <Badge>1</Badge>
    </HeaderWrapper>
  );
}

export default Header;
