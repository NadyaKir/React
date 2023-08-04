import { useState } from 'react';

import styled from 'styled-components';
import CardWrapper from '../UI/CardWrapper';
import { Button } from '../UI/Button.styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
`;

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

  return (
    <CardWrapper>
      <Form>
        <Label htmlFor="title">Заголовок:</Label>
        <Input id="title" type="text" value={title} onChange={titleChangeHandler} />
        <Label htmlFor="descr">Описание:</Label>
        <Textarea id="descr" type="text" value={descr} onChange={descrChangeHandler} />
        <Button onClick={clickAddButton}>Добавить</Button>
      </Form>
    </CardWrapper>
  );
};

export default Add;
