import { useEffect, useState, useRef } from 'react';
import { useDeepCompareEffect } from 'hooks/useDeepCompareEffect';

const DeepCompareComponent = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectRef = useRef();
  const useDeepCompareRef = useRef();
  const person = { age: age, name: 'Marti' };

  useEffect(() => {
    useEffectRef.current.textContent =
      parseInt(useEffectRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    useDeepCompareRef.current.textContent =
      parseInt(useDeepCompareRef.current.textContent) + 1;
  }, [person]);

  return (
    <>
      <p>
        useEffect: <span ref={useEffectRef}>0</span>
      </p>
      <p>
        useDeepCompareEffect: <span ref={useDeepCompareRef}>0</span>
      </p>
      <p>Other Count: {otherCount}</p>
      <p>{JSON.stringify(person)}</p>
      <button onClick={() => setAge((a) => a + 1)}>Increment Age</button>
      <button onClick={() => setOtherCount((c) => c + 1)}>
        Increment Other Count
      </button>
    </>
  );
};

export default DeepCompareComponent;
