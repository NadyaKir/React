import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '../Card/Card';
import { cardsActions } from '../../store';

import { Wrapper } from './CardList.styled';

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cards.items || []);
  const readOnly = useSelector((state) => state.cards.readOnly);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
      )
      .then((res) => {
        const modifiedData = res.data.slice(0, 15).map((item) => ({
          ...item,
          isChecked: false,
        }));
        dispatch(
          cardsActions.fetchData({
            items: modifiedData,
            itemsCount: modifiedData.length,
          })
        );
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleDoubleClick = (id) => {
    if (readOnly) {
      navigate(`card/${id}`);
    }
  };

  return (
    <Wrapper>
      {items.map((item) => (
        <Card
          key={item.Number}
          id={item.Number}
          title={item.Name}
          descr={item.About}
          isChecked={item.isChecked}
          hiddenCheckbox={false}
          onDoubleClick={() => handleDoubleClick(item.Number)}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;
