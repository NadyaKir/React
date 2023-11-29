import { Fragment, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { MdEdit, MdSave, MdEditOff } from 'react-icons/md';
import { Header, Textarea, Title, Checkbox } from './CardHeader.styled';
import { Button } from '../UI/Button.styled';

const CardHeader = (props) => {
  const readOnly = useSelector((state) => state.cards.readOnly);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (props.isEditing && textareaRef.current) {
      autoResize(textareaRef.current);
    }
  }, [props.isEditing]);

  const autoResize = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.width = '100%';
    textarea.style.height = textarea.scrollHeight + 'px';
  };
  return (
    <Fragment>
      <Header>
        {props.isEditing ? (
          <Textarea
            type="text"
            ref={textareaRef}
            value={props.editedTitle}
            onChange={props.titleChangeHandler}
          ></Textarea>
        ) : (
          <Title>{props.title}</Title>
        )}
        {!props.isEditing && !readOnly && (
          <Button $edit="true" onClick={props.clickEditButtonHandler}>
            <MdEdit />
          </Button>
        )}
        {props.isEditing && (
          <Fragment>
            <Button $save="true" onClick={props.clickSaveButtonHandler}>
              <MdSave />
            </Button>
            <Button $cancel="true" onClick={props.clickCancelButtonHandler}>
              <MdEditOff />
            </Button>
          </Fragment>
        )}
        {!props.isEditing && !readOnly && !props.hiddenCheckbox && (
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
