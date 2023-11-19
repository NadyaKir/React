import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { cardsActions } from '../store';

import Card from '../components/Card/Card';

const CardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector((state) => state.cards.items);
  const selectedCard = items.find((item) => item.Number === id);

  useEffect(() => {
    dispatch(cardsActions.setReadOnly());
  }, [dispatch]);

  return (
    <div>
      <Card
        id={selectedCard.Number}
        title={selectedCard.Name}
        descr={selectedCard.About}
        isChecked={selectedCard.isChecked}
        hiddenCheckbox={true}
      />
    </div>
  );
};

export default CardPage;
