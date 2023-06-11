import './Card.css';
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.img} alt="cat" />
      <p className="card__content-text">{props.descr}</p>
    </div>
  );
}

export default Card;
