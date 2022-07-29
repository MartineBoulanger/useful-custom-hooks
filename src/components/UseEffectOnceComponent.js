import { useState } from 'react';
import { useEffectOnce } from 'hooks/useEffectOnce';

const UseEffectOnceComponent = () => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert('Hi!'));

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default UseEffectOnceComponent;
