import { useState, useContext } from 'react';
import { ItemsContext } from '../../store/context';

import { Form, Label, Input, Textarea } from './Add.styled';
import { Button } from '../UI/Button.styled';

const Add = () => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const { handleAdd } = useContext(ItemsContext);

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
