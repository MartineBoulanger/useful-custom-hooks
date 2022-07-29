import { useState } from 'react';
import { useUpdateEffect } from 'hooks/useUpdateEffect';

const UpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default UpdateEffectComponent;
