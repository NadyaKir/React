import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: #ffa07a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 0.5rem solid #e9967a;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const HeaderLogo = styled(Link)`
  text-align: center;
`;

export const NavBlock = styled.div`
  display: flex;
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
`;

export const HeaderUsername = styled.span`
  font-weight: 700;
  color: #fff;
`;

export const ImgLogo = styled.img`
  max-width: 12rem;
  height: auto;
`;

export const BadgeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
`;

export const Badge = styled.span`
  margin-left: 1rem;
  font-size: 20px;
  color: #fff6e5;
  font-weight: 700;
  background-color: red;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
`;
