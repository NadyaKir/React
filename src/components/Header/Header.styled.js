import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background: #ffa07a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 0.5rem solid #e9967a;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media only screen and (max-width: 585px) {
    height: 5rem;
  }
`;

export const HeaderLogo = styled(Link)`
  text-align: center;
`;

export const NavBlock = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isLoggedIn ? 'row' : 'row-reverse')};
  align-items: center;
  margin-right: 1rem;
`;

export const HeaderLink = styled(Link)`
  margin-right: 1rem;
`;

export const LoggedInBlock = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
  }

  @media screen and (min-width: 586px) and (max-width: 656px) {
    margin-left: 4rem;
  }

  @media only screen and (max-width: 585px) {
    display: none;
  }
`;

export const HeaderUsername = styled.span`
  font-weight: 700;
  color: #fff;
`;

export const ImgLogo = styled.img`
  max-width: 12rem;
  height: auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BadgeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 3rem;

  @media screen and (max-width: 915px) {
    p {
      display: none;
    }
  }
  @media only screen and (max-width: 585px) {
    margin: 0;
  }
`;

export const Badge = styled.span`
  margin-left: 1rem;
  font-size: 20px;
  color: #fff6e5;
  font-weight: 700;
  background-color: red;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;

  @media screen and (max-width: 915px) {
    margin-right: 0;
  }
`;
