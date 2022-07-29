import { useMediaQuery } from 'hooks/useMediaQuery';

const MediaQueryComponent = () => {
  const isLarge = useMediaQuery('(min-width: 200px)');

  return <p>Large: {isLarge.toString()}</p>;
};

export default MediaQueryComponent;
