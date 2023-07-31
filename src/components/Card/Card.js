import { useState, useEffect } from 'react';
import classNames from 'classnames';

import CardHeader from './CardHeader';

import './Card.css';

function Card(props) {
  //checkbox
  const [isChecked, setIsChecked] = useState(false);

  //edit
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDescr, setEditedDescr] = useState(props.descr);

  const resetEditingMode = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    if (props.readOnly && isEditing) {
      resetValues();
      resetEditingMode();
    }
  }, [isEditing, props.readOnly]);

  //checkbox func
  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  //buttons func-s
  const clickEditButtonHandler = () => {
    setIsEditing(!isEditing);
    setIsChecked(false);
  };

  const clickSaveButtonHandler = () => {
    setIsEditing(!isEditing);
    props.handleChange(props.id, editedTitle, editedDescr);
  };

  const resetValues = () => {
    setEditedTitle(props.title);
    setEditedDescr(props.descr);
  };

  const clickCancelButtonHandler = () => {
    setIsEditing(!isEditing);
    resetValues();
  };

  //change handlers
  const titleChangeHandler = (event) => {
    setEditedTitle(event.target.value);
  };

  const descrChangeHandler = (event) => {
    setEditedDescr(event.target.value);
  };

  return (
    <div className={classNames('card', { 'card checked': isChecked })}>
      <CardHeader
        isEditing={isEditing}
        editedTitle={editedTitle}
        title={props.title}
        titleChangeHandler={titleChangeHandler}
        clickEditButtonHandler={clickEditButtonHandler}
        clickSaveButtonHandler={clickSaveButtonHandler}
        clickCancelButtonHandler={clickCancelButtonHandler}
        checkboxChangeHandler={checkboxChangeHandler}
        checked={isChecked}
        readOnly={props.readOnly}></CardHeader>

      {isEditing ? (
        <textarea
          className="card__textarea"
          value={editedDescr}
          onChange={descrChangeHandler}></textarea>
      ) : (
        <p className="card__text">{props.descr}</p>
      )}
    </div>
  );
}

export default Card;
