import { useEffect } from 'react';

export const useEffectOnce = (cb) => {
  useEffect(cb, []);
};
