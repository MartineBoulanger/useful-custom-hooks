import { useState } from 'react';
import { useStateWithHistory } from 'hooks/useStateWithHistory';

const StateWithHistoryComponent = () => {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState('Marti');

  return (
    <>
      <p>{count}</p>
      <p>{history.join(', ')}</p>
      <p>Pointer - {pointer}</p>
      <p>{name}</p>
      <button onClick={() => setCount((c) => c * 2)}>Double</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName('Johnny')}>Change Name</button>
    </>
  );
};

export default StateWithHistoryComponent;
