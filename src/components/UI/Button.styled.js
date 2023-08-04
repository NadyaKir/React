import styled, { css } from 'styled-components';

export const Button = styled.button`
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

  ${(props) =>
    props.edit &&
    css`
      display: ${(props) => (props.isEditing ? 'none' : 'block')};
      background-color: #60391d;
    `}

  ${(props) =>
    props.save &&
    css`
      background-color: #4caf50;
    `}

  ${(props) =>
    props.cancel &&
    css`
      background-color: #f44336;
    `};
`;
