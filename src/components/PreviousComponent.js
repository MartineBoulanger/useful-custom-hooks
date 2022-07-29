import { useState } from 'react';
import { usePrevious } from 'hooks/usePrevious';

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Marti');
  const prevCount = usePrevious(count);

  return (
    <>
      <p>
        {count} - {prevCount}
      </p>
      <p>{name}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName('Johnny')}>Change Name</button>
    </>
  );
};

export default PreviousComponent;
