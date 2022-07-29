import { useState } from 'react';
import { useToggle } from 'hooks/useToggle';
import { useDebugInformation } from 'hooks/useDebugInformation';

const ChildComponent = (props) => {
  const { boolean, count } = props;
  useDebugInformation('ChildComponent', props);
  return (
    <>
      <p>{boolean.toString()}</p>
      <p>{count}</p>
    </>
  );
};

const DebugInformationComponent = () => {
  const [boolean, toggle] = useToggle(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildComponent boolean={boolean} count={count} />
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
};

export default DebugInformationComponent;
