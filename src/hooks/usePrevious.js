import { useRef } from 'react';

export const usePrevious = (val) => {
  const current = useRef(val);
  const previous = useRef();

  if (current.current !== val) {
    previous.current = current.current;
    current.current = val;
  }

  return previous.current;
};
