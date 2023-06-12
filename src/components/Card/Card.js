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

  //checkbox func
  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  //buttons func
  const clickEditButtonHandler = () => {
    setIsEditing(!isEditing);
    setIsChecked(isChecked ? !isChecked : isChecked);
    setEditedTitle(title);
  };

  const clickSaveButtonHandler = () => {
    setIsEditing(!isEditing);
    setTitle(editedTitle);
  };

  const clickCancelButtonHandler = () => {
    setIsEditing(!isEditing);
    setEditedTitle(title);
  };

  //clasnames
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
            onChange={(e) => setTitle(e.target.value)}></textarea>
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
          value={descr}
          onChange={(e) => setDescr(e.target.value)}></textarea>
      ) : (
        <p className="card__text">{descr}</p>
      )}
    </div>
  );
}

export default Card;
