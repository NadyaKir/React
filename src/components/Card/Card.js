import { useState } from 'react';

import './Card.css';

//god help push this branch

function Card(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  const cardClassName = isChecked ? 'card checked' : 'card';

  return (
    <div className={cardClassName}>
      <div className="card-block">
        <h2 className="card-block__title">{props.title}</h2>
        <input
          className="card-block-checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}></input>
      </div>
      <img className="card__img" src={props.img} alt="cat" />
      <p className="card__text">{props.descr}</p>
    </div>
  );
}

export default Card;
