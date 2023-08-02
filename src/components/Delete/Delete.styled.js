import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 18px;
  margin-left: 20px;
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 3px 5px;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 5px;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
