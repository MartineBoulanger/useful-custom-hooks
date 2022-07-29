import { useRef, useEffect } from 'react';

export const useEventListener = (eType, cb, el = window) => {
  const cbRef = useRef(cb);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    const handler = (e) => cbRef.current(e);
    el.addEventListener(eType, handler);
    return () => el.removeEventListener(eType, handler);
  }, [eType, el]);
};
