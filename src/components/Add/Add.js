import { useState } from 'react';

import { Form, Label, Input, Textarea } from './Add.styled';
import { Button } from '../UI/Button.styled';

const Add = ({ handleAdd }) => {
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  };

  const descrChangeHandler = (event) => {
    setDescr(event.target.value);
    // console.log(descr);
  };

  const clickAddButton = (event) => {
    event.preventDefault();
    handleAdd(title, descr);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Form>
      <Label htmlFor="title">Заголовок:</Label>
      <Input
        id="title"
        type="text"
        value={title}
        onChange={titleChangeHandler}
        onClick={stopPropagation}
      />
      <Label htmlFor="descr">Описание:</Label>
      <Textarea
        id="descr"
        type="text"
        value={descr}
        onChange={descrChangeHandler}
        onClick={stopPropagation}
      />
      <Button onClick={clickAddButton}>Добавить</Button>
    </Form>
  );
};

export default Add;
