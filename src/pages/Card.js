import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';

const CardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector((state) => state.items);
  const selectedCard = items.find((item) => item.Number === id);
  const readOnly = useSelector((state) => state.readOnly);

  useEffect(() => {
    dispatch({ type: 'SET_READ_ONLY' });
  }, [dispatch]);

  return (
    <div>
      <Card
        id={selectedCard.Number}
        title={selectedCard.Name}
        descr={selectedCard.About}
        isChecked={selectedCard.isChecked}
      />
    </div>
  );
};

export default CardPage;
