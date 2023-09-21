import styled, { css } from 'styled-components';

export const Button = styled.button`
  margin-top: 1rem;
  background-color: #0000ff;
  color: white;
  border: none;
  padding: 0.3em 0.5em;
  font-size: 16px;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  &:hover {
    opacity: ${(props) => (props.disabled ? '0.5' : '0.8')};
  }

  ${(props) =>
    props.edit &&
    css`
      margin-top: 0;
      display: ${(props) => (props.isEditing ? 'none' : 'block')};
      margin-right: 0.5em;
      background-color: #60391d;
    `}

  ${(props) =>
    props.save &&
    css`
      margin-top: 0;
      margin-right: 0.5em;
      background-color: #4caf50;
    `}

  ${(props) =>
    props.cancel &&
    css`
      margin-top: 0;
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
