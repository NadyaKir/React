import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 2em;

  @media screen and (max-width: 1180px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;
