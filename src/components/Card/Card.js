import { useState } from 'react';

import './Card.css';

function Card(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  const cardClassName = isChecked ? 'card checked' : 'card';

  return (
    <div className={cardClassName}>
      <div className="card__block">
        <h2 className="card__block-title">{props.title}</h2>
        <input
          className="card__block-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}></input>
      </div>
      <img className="card__img" src={props.img} alt="cat" />
      <p className="card__content-text">{props.descr}</p>
    </div>
  );
}

export default Card;
