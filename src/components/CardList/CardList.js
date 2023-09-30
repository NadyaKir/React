import { useEffect } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper } from './CardList.styled';

const CardList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  console.log('items: ' + JSON.stringify(items));

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
      )
      .then((res) => {
        const modifiedData = res.data.slice(0, 15).map((item) => ({
          ...item,
          isChecked: item.isChecked,
        }));
        dispatch({ type: 'FETCH_DATA', modifiedData });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

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
