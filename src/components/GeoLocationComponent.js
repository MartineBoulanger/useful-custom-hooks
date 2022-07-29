import { useGeolocation } from 'hooks/useGeolocation';

const GeoLocationComponent = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation();

  return (
    <>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {error?.message}</p>
      <p>
        {latitude} x {longitude}
      </p>
    </>
  );
};

export default GeoLocationComponent;
