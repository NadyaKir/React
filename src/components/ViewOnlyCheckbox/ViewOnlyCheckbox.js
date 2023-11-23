import { useDispatch, useSelector } from 'react-redux';

import { cardsActions } from '../../store';

import {
  ViewOnlyCheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Checkmark,
  Label,
} from './ViewOnlyCheckbox.styled';

const ViewOnlyCheckbox = () => {
  const dispatch = useDispatch();
  const readOnly = useSelector((state) => state.cards.readOnly);

  const readOnlyHandler = () => {
    dispatch(cardsActions.setReadOnly({ readOnly: !readOnly }));
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
