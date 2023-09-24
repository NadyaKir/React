import { useState } from 'react';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import { UsernameInput, PasswordInput } from '../UI/Input';

const SignInForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredUsernameValid, setEnteredUsernameValid] = useState(false);
  const [enteredPasswordValid, setEnteredPasswordValid] = useState(false);

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const isSignInFormValid = enteredUsernameValid && enteredPasswordValid;

  return (
    <Form onSubmit={onSubmitHandler}>
      <UsernameInput
        labelText="Username"
        type="email"
        onChange={enteredUsernameHandler}
        placeholder="Enter your username"
        value={enteredUsername}
        setEnteredUsernameValid={setEnteredUsernameValid}
        required
      />
      <PasswordInput
        labelText="Password"
        type="password"
        onChange={enteredPasswordHandler}
        placeholder="Enter your password"
        value={enteredPassword}
        setEnteredPasswordValid={setEnteredPasswordValid}
        required
      />
      <Button disabled={!isSignInFormValid}>Log in</Button>
    </Form>
  );
};

export default SignInForm;
