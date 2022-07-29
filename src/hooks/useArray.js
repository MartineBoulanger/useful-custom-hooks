import { useState } from 'react';

export const useArray = (val) => {
  const [array, setArray] = useState(val);

  const push = (el) => {
    setArray((a) => [...a, el]);
  };

  const filter = (cb) => {
    setArray((a) => a.filter(cb));
  };

  const update = (idx, nEl) => {
    setArray((a) => [...a.slice(0, idx), nEl, ...a.slice(idx + 1)]);
  };

  const remove = (idx) => {
    setArray((a) => [...a.slice(0, idx), ...a.slice(idx + 1, a.length - 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  const reset = () => {
    setArray(val);
  };

  return { array, set: setArray, push, filter, update, remove, clear, reset };
};
