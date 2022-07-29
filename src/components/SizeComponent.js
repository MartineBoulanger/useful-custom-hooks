import { useRef } from 'react';
import { useSize } from 'hooks/useSize';

const SizeComponent = () => {
  const ref = useRef();
  const size = useSize(ref);

  return (
    <>
      <p>{JSON.stringify(size)}</p>
      <textarea ref={ref}></textarea>
    </>
  );
};

export default SizeComponent;
