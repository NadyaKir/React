import styled from 'styled-components';

const ViewOnlyCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.div`
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

const Checkmark = styled.span`
  color: #ffffff;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
`;

const Label = styled.span`
  margin-left: 8px;
`;

const ViewOnlyCheckbox = (props) => {
  return (
    <ViewOnlyCheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        id="viewOnly"
        checked={props.readOnly}
        onChange={props.readOnlyHandler}
      />
      <StyledCheckbox checked={props.readOnly}>
        <Checkmark checked={props.readOnly}>&#10003;</Checkmark>
      </StyledCheckbox>
      <Label>Только просмотр</Label>
    </ViewOnlyCheckboxWrapper>
  );
};

export default ViewOnlyCheckbox;
