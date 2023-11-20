import Content from '../components/Content/Content';

import { cardsActions } from '../store';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsActions.setReadOnly());
  }, [dispatch]);

  return <Content />;
};

export default HomePage;
