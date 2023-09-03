import { useItems } from '../../store/context';
import Card from '../Card/Card';

import { Wrapper } from './CardList.styled';

const CardList = () => {
  const { items } = useItems();

  return (
    <Wrapper>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          descr={item.descr}
          isChecked={item.isChecked}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
