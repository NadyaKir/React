import { useState } from 'react';

const useValidation = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
};

export default useValidation;
