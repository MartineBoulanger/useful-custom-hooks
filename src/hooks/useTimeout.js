import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback, delay) => {
  const cb = useRef(callback);
  const timeout = useRef();

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeout.current = setTimeout(() => cb.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, clear, set]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};
