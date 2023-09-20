import { useState } from 'react';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import Input from '../UI/Input';

const SignInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const isEmailValid = (email) => {
    const isEmailVailid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return isEmailVailid.test(email);
  };

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // console.log(enteredUsername);
  // console.log(enteredPassword);

  const onClickHandler = () => {
    if (isEmailValid(enteredUsername)) {
      console.log('Valid!');
    } else {
      console.log('Not valid!');
    }
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>username:</label>
      <Input
        type="email"
        onChange={enteredUsernameHandler}
        placeholder="Enter your username"
        required
      />
      <label>password:</label>
      <Input
        type="text"
        onChange={enteredPasswordHandler}
        placeholder="Enter your password"
        required
      />
      <Button onClick={onClickHandler}>Log in</Button>
    </Form>
  );
};

export default SignInForm;
