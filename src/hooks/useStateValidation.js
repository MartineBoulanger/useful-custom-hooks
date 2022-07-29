import { useState, useCallback } from 'react';

export const useStateValidation = (valFunc, initVal) => {
  const [state, setState] = useState(initVal);
  const [isvalid, setIsValid] = useState(() => valFunc(state));

  const onChange = useCallback(
    (next) => {
      const value = typeof next === 'function' ? next(state) : next;
      setState(value);
      setIsValid(valFunc(value));
    },
    [valFunc, state]
  );

  return [state, onChange, isvalid];
};
