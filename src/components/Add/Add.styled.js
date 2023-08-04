import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 15px;
`;

export const Textarea = styled.textarea`
  margin-bottom: 20px;
  resize: none;
  height: 200px;
  text-align: justify;
  overflow-y: hidden;
  overflow-x: hidden;
`;
