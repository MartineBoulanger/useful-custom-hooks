import { useRef } from 'react';
import { useHover } from 'hooks/useHover';

const HoverComponent = () => {
  const elemRef = useRef();
  const hovered = useHover(elemRef);

  return (
    <div
      ref={elemRef}
      style={{
        backgroundColor: hovered ? 'blue' : 'red',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        transform: hovered ? 'scale(2)' : 'none',
        transition: 'all 1s',
      }}
    />
  );
};

export default HoverComponent;
