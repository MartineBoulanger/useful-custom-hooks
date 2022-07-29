import { useToggle } from 'hooks/useToggle';

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <p>{value.toString()}</p>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
};

export default ToggleComponent;
