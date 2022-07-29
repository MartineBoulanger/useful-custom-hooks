import { useScript } from 'hooks/useScript';

const ScriptComponent = () => {
  const { loading, error } = useScript(
    'https://code.jquery.com/jquery-3.6.0.min.js'
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <p>{window.$(window).width()}</p>;
};

export default ScriptComponent;
