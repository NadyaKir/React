import styled from 'styled-components';

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
  max-width: 300px;
  resize: none;
  font-weight: bold;
  border: none;
  font-family: inherit;
  font-size: 24px;
  box-sizing: border-box;
  padding-top: 20px;
`;

export const Checkbox = styled.input`
  border-radius: 1rem;
  width: 22px;
  height: 22px;
  display: ${(props) => (props.isEditing ? 'none' : 'block')};
`;
