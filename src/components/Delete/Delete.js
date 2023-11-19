import { useDispatch } from 'react-redux';

import { cardsActions } from '../../store';

import { Button } from '../UI/Button.styled';

const Delete = ({ readOnly }) => {
  const dispatch = useDispatch();

  const handleDeleteCards = () => {
    dispatch(cardsActions.deleteItem());
  };

  return (
    <Button readOnly={readOnly} delete="true" onClick={handleDeleteCards}>
      Удалить выбранные карточки
    </Button>
  );
};

export default Delete;
