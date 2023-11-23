import { Fragment } from 'react';
import { FormInput } from './Input.styled';

export const UsernameInput = ({
  labelText,
  type,
  value,
  onChange,
  placeholder,
  required,
  setEnteredUsernameValid,
}) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const isValid = emailRegex.test(value);

  setEnteredUsernameValid(isValid);

  return (
    <Fragment>
      <label>{labelText}:</label>
      <FormInput
        isValid={isValid}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {!isValid && !value.trim().length === 0 && (
        <p>Incorrect email! Example: dawdavfa@qwe.ru</p>
      )}
    </Fragment>
  );
};

export const PasswordInput = ({
  labelText,
  type,
  value,
  onChange,
  placeholder,
  required,
  setEnteredPasswordValid,
}) => {
  const hasLettersRegex = /[a-zA-Z]/.test(value);
  const hasDigitsRegex = /[0-9]/.test(value);
  const isLengthMinEight = value.length > 7;

  const isValid = hasDigitsRegex && hasLettersRegex && isLengthMinEight;

  setEnteredPasswordValid(isValid);

  return (
    <Fragment>
      <label>{labelText}:</label>
      <FormInput
        isValid={isValid}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <ul>
        {!hasLettersRegex && !value.trim().length === 0 && (
          <li>The password must contain at least one letter.</li>
        )}
        {!hasDigitsRegex && !value.trim().length === 0 && (
          <li>The password must contain at least one digit.</li>
        )}
        {!isLengthMinEight && !value.trim().length === 0 && (
          <li>The password must be at least 8 characters long.</li>
        )}
      </ul>
    </Fragment>
  );
};
