import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9967a;
  border-radius: 1rem;
  background-color: #fff6e5;
  padding: 20px;
  width: 500px;

  @media screen and (max-height: 600px) {
    flex-basis: calc(33.33% - 20px);
  }

  @media screen and (max-height: 400px) {
    flex-basis: calc(50% - 20px);
  }

  @media screen and (max-height: 300px) {
    flex-basis: 100%;
  }
`;
