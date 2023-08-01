import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin: 30px 20px;

  @media screen and (max-width: 859px) {
    justify-content: center;
  }
`;
