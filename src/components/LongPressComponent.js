import { useRef } from 'react';
import { useLongPress } from 'hooks/useLongPress';

const LongPressComponent = () => {
  const elemRef = useRef();
  useLongPress(elemRef, () => alert('Long Press'));
  return (
    <div
      ref={elemRef}
      style={{
        backgroundColor: 'green',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
      }}
    />
  );
};

export default LongPressComponent;
