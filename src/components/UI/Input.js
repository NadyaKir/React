import { FormInput } from './Input.styled';

const Input = ({ type, value, onChange, placeholder, required }) => {
  return (
    <FormInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
