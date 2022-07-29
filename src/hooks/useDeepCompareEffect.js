import { useEffect, useRef } from 'react';
import isEqual from 'lodash/fp/isEqual';

export const useDeepCompareEffect = (cb, deps) => {
  const currentDepsRef = useRef();

  if (!isEqual(currentDepsRef.current, deps)) {
    currentDepsRef.current = deps;
  }

  useEffect(cb, [currentDepsRef.current]);
};
