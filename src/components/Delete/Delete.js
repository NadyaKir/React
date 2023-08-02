import { Button } from './Delete.styled';

const Delete = ({ handleDeleteCards, selectedCardIds }) => {
  return (
    <Button onClick={() => handleDeleteCards(selectedCardIds)}>Удалить выбранные карточки</Button>
  );
};

export default Delete;
