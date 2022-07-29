import { useCallback, useEffect, useState } from 'react';

export const useAsync = (cb, deps = []) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    cb()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, deps);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};
