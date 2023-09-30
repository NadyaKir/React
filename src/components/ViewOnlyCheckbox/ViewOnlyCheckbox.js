import { useDispatch, useSelector } from 'react-redux';

import {
  ViewOnlyCheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Checkmark,
  Label,
} from './ViewOnlyCheckbox.styled';

const ViewOnlyCheckbox = () => {
  const dispatch = useDispatch();
  const readOnly = useSelector((state) => state.readOnly);

  const readOnlyHandler = () => {
    {
      dispatch({ type: 'SET_READ_ONLY' });
    }
  };

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
