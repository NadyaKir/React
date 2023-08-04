import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9967a;
  border-radius: 1rem;
  background-color: #fff6e5;
  padding: 20px;
  flex: 0 0 calc(33.33% - 20px);

  @media screen and (max-width: 1180px) {
    flex: 0 0 calc(50% - 10px);
  }

  @media screen and (max-width: 750px) {
    flex: 0 0 calc(90% - 10px);
  }
`;
