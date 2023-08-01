import {
  ViewOnlyCheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Checkmark,
  Label,
} from './ViewOnlyCheckbox.styled';

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
