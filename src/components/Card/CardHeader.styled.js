import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin-right: auto;
`;

export const Textarea = styled.textarea`
  margin-right: auto;
  background: #fff6e5;
  min-height: fit-content;
  resize: none;
  font-weight: bold;
  border: none;
  font-size: 24px;
  padding-top: 20px;
`;

export const Button = styled.button`
  margin-left: 5px;
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

export const Checkbox = styled.input`
  border-radius: 1rem;
  width: 22px;
  height: 22px;
  display: ${(props) => (props.isEditing ? 'none' : 'block')};
`;
