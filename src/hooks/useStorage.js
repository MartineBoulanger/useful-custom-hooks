import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = (key, value) => {
  return useStorage(key, value, window.localStorage);
};

export const useSessionStorage = (key, value) => {
  return useStorage(key, value, window.sessionStorage);
};

const useStorage = (key, val, obj) => {
  const [value, setValue] = useState(() => {
    const jsonValue = obj.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initVal === 'function') {
      return val();
    } else {
      return val;
    }
  });

  useEffect(() => {
    if (value === undefined) return obj.removeItem(key);
    obj.setItem(key, JSON.stringify(value));
  }, [key, value, obj]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};
