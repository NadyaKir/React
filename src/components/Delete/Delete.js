import { useDispatch } from 'react-redux';

import { Button } from '../UI/Button.styled';

const Delete = ({ readOnly }) => {
  const dispatch = useDispatch();

  const handleDeleteCards = () => {
    dispatch({ type: 'DELETE_ITEM' });
  };

  return (
    <Button readOnly={readOnly} delete="true" onClick={handleDeleteCards}>
      Удалить выбранные карточки
    </Button>
  );
};

export default Delete;
