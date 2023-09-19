import { Button } from '../UI/Button.styled';
import { Form } from './SignInForm.styled';
import Input from '../UI/Input';

const SignInForm = () => {
  return (
    <Form>
      <label>username:</label>
      <Input />
      <label>password:</label>
      <Input />
      <Button>Log in</Button>
    </Form>
  );
};

export default SignInForm;
