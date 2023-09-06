import { useContext } from 'react';

import { ItemsContext } from '../../store/context';
import Card from '../Card/Card';

import { Wrapper } from './CardList.styled';

const CardList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <Wrapper>
      {items.map((item) => (
        <Card
          key={item.Number}
          id={item.Number}
          title={item.Name}
          descr={item.About}
          isChecked={item.isChecked}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
