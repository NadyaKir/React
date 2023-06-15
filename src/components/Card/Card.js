import { useState } from 'react';

import { MdEdit, MdSave, MdEditOff } from 'react-icons/md';

import './Card.css';

function Card(props) {
  //checkbox
  const [isChecked, setIsChecked] = useState(false);

  //edit
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(props.title);
  const [editedTitle, setEditedTitle] = useState('');

  const [descr, setDescr] = useState(props.descr);
  const [editedDescr, setEditedDescr] = useState('');

  //checkbox func
  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  //buttons func-s
  const clickEditButtonHandler = () => {
    setIsEditing(!isEditing);
    setIsChecked(!isChecked);
    setEditedTitle(title);
    setEditedDescr(descr);
  };

  const clickSaveButtonHandler = () => {
    setIsEditing(!isEditing);
    setTitle(editedTitle);
    setDescr(editedDescr);
  };

  const clickCancelButtonHandler = () => {
    setIsEditing(!isEditing);
    setEditedTitle(title);
    setEditedDescr(descr);
  };

  //clasnames variables
  const cardClassName = isChecked ? 'card checked' : 'card';
  const buttonClassName = isEditing ? 'card-block__edit-btn hide' : 'card-block__edit-btn';
  const checkboxClassName = isEditing ? 'card-block__checkbox hide' : 'card-block__checkbox';

  return (
    <div className={cardClassName}>
      <div className="card-block">
        {isEditing ? (
          <textarea
            className="card-block__input"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}></textarea>
        ) : (
          <h2 className="card-block__title">{title}</h2>
        )}
        <button className={buttonClassName} onClick={clickEditButtonHandler}>
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
          className={checkboxClassName}
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}></input>
      </div>
      <img className="card__img" src={props.img} alt="cat" />
      {isEditing ? (
        <textarea
          className="card__textarea"
          value={editedDescr}
          onChange={(e) => setEditedDescr(e.target.value)}></textarea>
      ) : (
        <p className="card__text">{descr}</p>
      )}
    </div>
  );
}

export default Card;
