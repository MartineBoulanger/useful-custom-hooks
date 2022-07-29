import { useState, useEffect } from 'react';
import { useEventListener } from './useEventListener';

export const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const [queryList, setQueryList] = useState();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (e) => setIsMatch(e.matches), queryList);

  return isMatch;
};
