import Content from '../components/Content/Content';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_READ_ONLY' });
  }, [dispatch]);

  return <Content />;
};

export default HomePage;
