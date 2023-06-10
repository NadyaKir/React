import './Header.css';

import headerLogo from './header-logo.png';
import stars from './stars.png';

function Header() {
  return (
    <div className="header">
      <img className="stars" src={stars} alt="stars" />
      <a className="header__logo">
        <img className="header__logo-img" src={headerLogo} alt="Cute sleeping cat" />
      </a>
      <img className="stars" src={stars} alt="stars" />
    </div>
  );
}

export default Header;
