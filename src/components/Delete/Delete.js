import { Button } from '../UI/Button.styled';

const Delete = ({ handleDeleteCards }) => {
  return (
    <Button delete="true" onClick={handleDeleteCards}>
      Удалить выбранные карточки
    </Button>
  );
};

export default Delete;
