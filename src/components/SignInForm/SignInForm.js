import { useState } from 'react';

import useValidation from '../../hooks/use-validation';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import Input from '../UI/Input';

const SignInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const isValid = useValidation(enteredUsername, enteredPassword);

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>Username:</label>
      <Input
        type="email"
        onChange={enteredUsernameHandler}
        placeholder="Enter your username"
        required
      />
      <label>Password:</label>
      <Input
        type="password"
        onChange={enteredPasswordHandler}
        placeholder="Enter your password"
        required
      />
      <Button disabled={!isValid()}>Log in</Button>
    </Form>
  );
};

export default SignInForm;
