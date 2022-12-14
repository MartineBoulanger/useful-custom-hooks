import { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

const ClickOutsideComponent = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? 'grid' : 'none',
          backgroundColor: 'blue',
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: 'calc(50% - 50px)',
          left: 'calc(50% - 50px)',
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
};

export default ClickOutsideComponent;
