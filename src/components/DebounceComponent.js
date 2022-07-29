import { useState } from 'react';
import { useDebounce } from 'hooks/useDebounce';

const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default DebounceComponent;
