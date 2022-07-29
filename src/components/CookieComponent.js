import React from 'react';
import { useCookie } from 'hooks/useCookie';

const CookieComponent = () => {
  const [value, update, remove] = useCookie('name', 'Marti');

  return (
    <>
      <p>{value}</p>
      <button onClick={() => update('Johnny')}>Change Name</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
};

export default CookieComponent;
