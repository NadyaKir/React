import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginActions } from '../../store';

import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import { UsernameInput, PasswordInput } from '../UI/Input';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const onClickLoginButton = () => {
    if (isSignInFormValid) {
      if (
        enteredUsername === 'testAdmin@gmail.com' &&
        enteredPassword === '12345yuiopp'
      ) {
        dispatch(loginActions.setLogin({ isLoggedIn: true, isAdmin: true }));
      } else {
        dispatch(loginActions.setLogin({ isLoggedIn: true }));
      }

      dispatch(loginActions.handleUsername({ username: enteredUsername }));
      navigate('/');
    }
  };

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
      <Button onClick={onClickLoginButton} disabled={!isSignInFormValid}>
        Log in
      </Button>
    </Form>
  );
};

export default SignInForm;
