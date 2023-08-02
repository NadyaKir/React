import { Fragment } from 'react';
import { MdEdit, MdSave, MdEditOff } from 'react-icons/md';
import { Header, Textarea, Title, Button, Checkbox } from './CardHeader.styled';

const CardHeader = (props) => {
  return (
    <Fragment>
      <Header>
        {props.isEditing ? (
          <Textarea
            type="text"
            value={props.editedTitle}
            onChange={props.titleChangeHandler}></Textarea>
        ) : (
          <Title>{props.title}</Title>
        )}
        {!props.readOnly && (
          <Button edit isEditing={props.isEditing} onClick={props.clickEditButtonHandler}>
            <MdEdit />
          </Button>
        )}
        {props.isEditing && (
          <Fragment>
            <Button save onClick={props.clickSaveButtonHandler}>
              <MdSave />
            </Button>
            <Button cancel onClick={props.clickCancelButtonHandler}>
              <MdEditOff />
            </Button>
          </Fragment>
        )}
        <Checkbox
          type="checkbox"
          $isEditing={props.isEditing}
          checked={props.isChecked}
          onChange={props.checkboxChangeHandler}></Checkbox>
      </Header>
    </Fragment>
  );
};

export default CardHeader;
