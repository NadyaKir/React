import styled from 'styled-components';

export const FormInput = styled.input`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-right: 0.5em;

  &:focus {
    border-color: ${(props) =>
      props.isValid && props.value.trim().length > 0 ? '#7db87d' : '#fc2f21'};

    background-color: ${(props) => (props.isValid ? '#c0dcc0' : '#ffdaB9')};
  }
`;
