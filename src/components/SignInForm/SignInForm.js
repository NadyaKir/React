import { useState } from 'react';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import Input from '../UI/Input';

const SignInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const isEmailValid = (email) => {
    const EmailVailid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return EmailVailid.test(email);
  };

  const isPasswordValid = (password) => {
    const PasswordValid = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

    return PasswordValid.test(password);
  };

  const isLengthMoreEight = enteredPassword.trim().length > 7;

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onClickHandler = () => {
    if (
      isEmailValid(enteredUsername) &&
      isLengthMoreEight &&
      isPasswordValid(enteredPassword)
    ) {
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
