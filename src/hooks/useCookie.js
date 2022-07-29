import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

export const useCookie = (name, val) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, val);
    return val;
  });

  const updateCookie = useCallback(
    (newVal, options) => {
      Cookies.set(name, newVal, options);
      setValue(newVal);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
};
