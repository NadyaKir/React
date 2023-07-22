import { useState } from 'react';
import classNames from 'classnames';

import { MdEdit, MdSave, MdEditOff } from 'react-icons/md';

import './Card.css';

function Card(props) {
  //checkbox
  const [isChecked, setIsChecked] = useState(false);

  //edit
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedDescr, setEditedDescr] = useState(props.descr);

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
    console.log(props.id); // Убедитесь, что это значение определено
    setIsEditing(!isEditing);
    props.handleCatChange(props.id, editedTitle, editedDescr);
    console.log('---');
    console.log(props.id, editedTitle, editedDescr);
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
      <div className="card-block">
        {isEditing ? (
          <textarea
            className="card-block__input"
            type="text"
            value={editedTitle}
            onChange={titleChangeHandler}></textarea>
        ) : (
          <h2 className="card-block__title">{props.title}</h2>
        )}
        <button
          className={classNames('card-block__edit-btn', {
            'card-block__edit-btn hide': isEditing,
          })}
          onClick={clickEditButtonHandler}>
          <MdEdit />
        </button>
        {isEditing && (
          <>
            <button onClick={clickSaveButtonHandler}>
              <MdSave />
            </button>
            <button onClick={clickCancelButtonHandler}>
              <MdEditOff />
            </button>
          </>
        )}
        <input
          className={classNames('card-block__checkbox', { 'card-block__checkbox hide': isEditing })}
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}></input>
      </div>
      <img className="card__img" src={props.img} alt="cat" />
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
