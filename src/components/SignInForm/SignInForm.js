import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';

const SignInForm = () => {
  return (
    <Form>
      <label>username</label>
      <input />
      <label>password</label>
      <input />
      <Button>Log in</Button>
    </Form>
  );
};

export default SignInForm;
