import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '../Card/Card';

import { Wrapper } from './CardList.styled';

const CardList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

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
        dispatch({ type: 'FETCH_DATA', modifiedData });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleDoubleClick = (id) => {
    console.log('Double click happened ' + id);
    navigate(`cards/${id}`);
  };

  return (
    <Wrapper>
      {items.map((item) => (
        <>
          <Card
            key={item.Number}
            id={item.Number}
            title={item.Name}
            descr={item.About}
            isChecked={item.isChecked}
            onDoubleClick={() => handleDoubleClick(item.Number)}
          />
        </>
      ))}
    </Wrapper>
  );
};

export default CardList;
