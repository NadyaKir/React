import { FormInput } from './Input.styled';

export const UsernameInput = ({
  type,
  value,
  onChange,
  placeholder,
  required,
  setEnteredUsernameValid,
}) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  setEnteredUsernameValid(emailRegex.test(value));

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

export const PasswordInput = ({
  type,
  value,
  onChange,
  placeholder,
  required,
  setEnteredPasswordValid,
}) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

  setEnteredPasswordValid(passwordRegex.test(value) && value.length > 7);

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
