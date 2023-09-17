import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  background: #ffa07a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 0.5rem solid #e9967a;
  border-bottom-left-radius: 1rem; /* Закругление нижнего левого угла */
  border-bottom-right-radius: 1rem; /* Закругление нижнего правого угла */
`;

export const HeaderLogo = styled(Link)`
  text-align: center;
`;

export const HeaderLink = styled(Link)`
  margin-right: 1rem;
`;

export const ImgLogo = styled.img`
  max-width: 12rem;
  height: auto;
`;

export const ImgStars = styled.img`
  max-width: 5rem;
  height: auto;
  margin-right: 1rem;
`;

export const Badge = styled.span`
  margin-left: 2rem;
  margin-right: 3rem;
  font-size: 20px;
  color: #fff6e5;
  font-weight: 700;
  background-color: red;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
`;
