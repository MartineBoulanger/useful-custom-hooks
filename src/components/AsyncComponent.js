import { useAsync } from 'hooks/useAsync';

const AsyncComponent = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error');
      }, 1000);
    });
  });

  return (
    <>
      <p>Loading: {loading.toString()}</p>
      <p>{error}</p>
      <p>{value}</p>
    </>
  );
};

export default AsyncComponent;
