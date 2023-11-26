import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { MdEdit, MdSave, MdEditOff } from 'react-icons/md';
import { Header, Textarea, Title, Checkbox } from './CardHeader.styled';
import { Button } from '../UI/Button.styled';

const CardHeader = (props) => {
  const readOnly = useSelector((state) => state.cards.readOnly);

  return (
    <Fragment>
      <Header>
        {props.isCardEditing ? (
          <Textarea
            type="text"
            value={props.editedTitle}
            onChange={props.titleChangeHandler}
          ></Textarea>
        ) : (
          <Title>{props.title}</Title>
        )}
        {!props.isCardEditing && !readOnly && (
          <Button $edit="true" onClick={props.clickEditButtonHandler}>
            <MdEdit />
          </Button>
        )}
        {props.isCardEditing && (
          <Fragment>
            <Button $save="true" onClick={props.clickSaveButtonHandler}>
              <MdSave />
            </Button>
            <Button $cancel="true" onClick={props.clickCancelButtonHandler}>
              <MdEditOff />
            </Button>
          </Fragment>
        )}
        {!props.isCardEditing && !readOnly && !props.hiddenCheckbox && (
          <Checkbox
            type="checkbox"
            style={{ display: props.isEditing ? 'none' : 'block' }}
            checked={props.isChecked}
            onChange={props.checkboxChangeHandler}
          ></Checkbox>
        )}
      </Header>
    </Fragment>
  );
};

export default CardHeader;
