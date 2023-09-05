import { useContext } from 'react';

import { Button } from '../UI/Button.styled';
import { ItemsContext } from '../../store/context';

const Delete = () => {
  const { handleDeleteCards } = useContext(ItemsContext);

  return (
    <Button delete="true" onClick={handleDeleteCards}>
      Удалить выбранные карточки
    </Button>
  );
};

export default Delete;
