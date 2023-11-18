import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Label, Input, Textarea } from './Add.styled';
import { Button } from '../UI/Button.styled';

import { cardsActions } from '../../store';

const Add = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const handleAdd = () => {
    dispatch(cardsActions.addItem(title, descr));
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const descrChangeHandler = (event) => {
    setDescr(event.target.value);
  };

  const clickAddButton = (event) => {
    event.preventDefault();
    handleAdd(title, descr);
  };

  return (
    <Form>
      <Label htmlFor="title">Заголовок:</Label>
      <Input
        id="title"
        type="text"
        value={title}
        onChange={titleChangeHandler}
      />
      <Label htmlFor="descr">Описание:</Label>
      <Textarea
        id="descr"
        type="text"
        value={descr}
        onChange={descrChangeHandler}
      />
      <Button onClick={clickAddButton}>Добавить</Button>
    </Form>
  );
};

export default Add;
