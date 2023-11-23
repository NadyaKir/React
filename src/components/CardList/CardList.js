import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '../Card/Card';
import { cardsActions } from '../../store';

import { Wrapper, WelcomeText } from './CardList.styled';

const CardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cards.items || []);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
    navigate(`card/${id}`);
  };

  return (
    <Wrapper>
      {isLoggedIn ? (
        items.map((item) => (
          <Card
            key={item.Number}
            id={item.Number}
            title={item.Name}
            descr={item.About}
            isChecked={item.isChecked}
            hiddenCheckbox={false}
            onDoubleClick={() => handleDoubleClick(item.Number)}
          />
        ))
      ) : (
        <WelcomeText>
          <h1>Welcome!</h1>
          <p>Please log in as a user or administrator</p>
        </WelcomeText>
      )}
    </Wrapper>
  );
};

export default CardList;
