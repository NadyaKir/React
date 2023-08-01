import styled from 'styled-components';

export const ViewOnlyCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledCheckbox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  background-color: ${(props) => (props.checked ? '#ffa07a' : 'transparent')};
  border: 1px solid #e9967a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  color: #ffffff;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

export const Label = styled.span`
  margin-left: 8px;
`;
