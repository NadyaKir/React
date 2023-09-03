import { Button } from '../UI/Button.styled';
import { useItems } from '../../store/context';

const Delete = () => {
  const { handleDeleteCards } = useItems();

  return (
    <Button delete="true" onClick={handleDeleteCards}>
      Удалить выбранные карточки
    </Button>
  );
};

export default Delete;
