import { useState } from 'react';

export const useToggle = (val) => {
  const [value, setValue] = useState(val);

  const toggleValue = (v) => {
    setValue((current) => (typeof v === 'boolean' ? v : !current));
  };

  return [value, toggleValue];
};
