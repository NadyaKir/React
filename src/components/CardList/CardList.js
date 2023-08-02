import Card from '../Card/Card';

import { Wrapper } from './CardList.styled';

const CardList = ({ items, selectedCardIds, setSelectedCardIds, handleChange, readOnly }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          descr={item.descr}
          handleChange={handleChange}
          readOnly={readOnly}
          selectedCardIds={selectedCardIds}
          setSelectedCardIds={setSelectedCardIds}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
