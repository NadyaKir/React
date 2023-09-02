import Card from '../Card/Card';

import { Wrapper } from './CardList.styled';

const CardList = ({ items, handleChange, readOnly }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          descr={item.descr}
          isChecked={item.isChecked}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
