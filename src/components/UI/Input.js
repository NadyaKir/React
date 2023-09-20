import { FormInput } from './Input.styled';

const Input = ({ type, value, onChange }) => {
  return <FormInput type={type} value={value} onChange={onChange} />;
};

export default Input;
