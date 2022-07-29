import React from 'react';
import { useArray } from 'hooks/useArray';

const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear, reset } = useArray([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,
  ]);
  return (
    <>
      <p>{array.join(', ')}</p>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change 2nd Element To 9</button>
      <button onClick={() => remove(1)}>Remove 2nd Element</button>
      <button onClick={() => filter((n) => n < 3)}>Keep Nrs Less Than 4</button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};

export default ArrayComponent;
