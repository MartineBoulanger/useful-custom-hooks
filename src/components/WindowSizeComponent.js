import { useWindowSize } from 'hooks/useWindowSize';

const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <p>
      {width} x {height}
    </p>
  );
};

export default WindowSizeComponent;
