import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Card from '../components/Card/Card';

const CardPage = () => {
  const { id } = useParams();
  const items = useSelector((state) => state.cards.items);
  const selectedCard = items.find((item) => item.Number === id);

  return (
    <div>
      <Card
        id={selectedCard.Number}
        title={selectedCard.Name}
        descr={selectedCard.About}
        isChecked={selectedCard.isChecked}
        isEditing={selectedCard.isEditing}
        hiddenCheckbox={true}
      />
    </div>
  );
};

export default CardPage;
