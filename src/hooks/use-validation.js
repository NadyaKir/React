import { useState } from 'react';

const useValidation = (enteredUsername, enteredPassword) => {
  const isEmailValid = (email) => {
    const emailVailid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailVailid.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordValid = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

    return passwordValid.test(password);
  };

  const isLengthMoreEight = enteredPassword.trim().length > 7;

  return () =>
    isEmailValid(enteredUsername) &&
    isLengthMoreEight &&
    isPasswordValid(enteredPassword);
};

export default useValidation;
