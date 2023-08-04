import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 0.3em 0.5em;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 1em;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.edit &&
    css`
      display: ${(props) => (props.isEditing ? 'none' : 'block')};
      margin-right: 0.5em;
      background-color: #60391d;
    `}

  ${(props) =>
    props.save &&
    css`
      margin-right: 0.5em;
      background-color: #4caf50;
    `}

  ${(props) =>
    props.cancel &&
    css`
      margin-right: 0;
      background-color: #f44336;
    `};

  ${(props) =>
    props.delete &&
    css`
      margin-right: 0;
      background-color: #f44336;

      @media screen and (max-width: 418px) {
        margin-top: 1em;
      }
    `};
`;
