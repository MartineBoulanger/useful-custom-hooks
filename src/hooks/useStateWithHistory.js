import { useCallback, useRef, useState } from 'react';

export const useStateWithHistory = (val, { cap = 10 } = {}) => {
  const [value, setValue] = useState(val);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v) => {
      const resolved = typeof v === 'function' ? v(value) : v;
      if (historyRef.current[pointerRef.current] !== resolved) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolved);

        while (historyRef.current.length > cap) {
          historyRef.current.shift();
        }
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolved);
    },
    [value, cap]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((idx) => {
    if (idx < 0 || idx >= historyRef.current.length - 1) return;
    pointerRef.current = idx;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
};
