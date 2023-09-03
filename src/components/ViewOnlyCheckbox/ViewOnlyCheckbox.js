import { useItems } from '../../store/context';
import {
  ViewOnlyCheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Checkmark,
  Label,
} from './ViewOnlyCheckbox.styled';

const ViewOnlyCheckbox = () => {
  const { readOnly, readOnlyHandler } = useItems();

  return (
    <ViewOnlyCheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        id="viewOnly"
        checked={readOnly}
        onChange={readOnlyHandler}
      />
      <StyledCheckbox checked={readOnly}>
        <Checkmark checked={readOnly}>&#10003;</Checkmark>
      </StyledCheckbox>
      <Label>Только просмотр</Label>
    </ViewOnlyCheckboxWrapper>
  );
};

export default ViewOnlyCheckbox;
