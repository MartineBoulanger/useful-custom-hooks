import { useToggle } from 'hooks/useToggle';
import { useRenderCount } from 'hooks/useRenderCount';

const RenderCountComponent = () => {
  const [boolean, toggle] = useToggle(false);
  const renderCount = useRenderCount();

  return (
    <>
      <p>{boolean.toString()}</p>
      <p>{renderCount}</p>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default RenderCountComponent;
