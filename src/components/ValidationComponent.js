import { useStateValidation } from 'hooks/useStateValidation';

const ValidationComponent = () => {
  const [username, setUsername, isValid] = useStateValidation(
    (name) => name.length > 5,
    ''
  );

  return (
    <>
      <p>Valid: {isValid.toString()}</p>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
};

export default ValidationComponent;
