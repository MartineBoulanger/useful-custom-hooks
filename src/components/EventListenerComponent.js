import { useState } from 'react';
import { useEventListener } from 'hooks/useEventListener';

const EventListenerComponent = () => {
  const [key, setKey] = useState('');
  useEventListener('keydown', (e) => {
    setKey(e.key);
  });

  return <p>Last key: {key}</p>;
};

export default EventListenerComponent;
