import { useState } from 'react';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import Input from '../UI/Input';

const SignInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  console.log(enteredUsername);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>username:</label>
      <Input
        type="text"
        onChange={enteredUsernameHandler}
        value={enteredUsername}
      />
      <label>password:</label>
      <Input />
      <Button>Log in</Button>
    </Form>
  );
};

export default SignInForm;
