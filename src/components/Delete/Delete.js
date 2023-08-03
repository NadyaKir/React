import { Button } from './Delete.styled';

const Delete = ({ handleDeleteCards }) => {
  return <Button onClick={handleDeleteCards}>Удалить выбранные карточки</Button>;
};

export default Delete;
