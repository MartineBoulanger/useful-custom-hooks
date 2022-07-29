import { useLocalStorage, useSessionStorage } from 'hooks/useStorage';

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage('name', 'Marti');
  const [age, setAge, removeAge] = useLocalStorage('age', 39);
  return (
    <>
      <p>
        {name} - {age}
      </p>
      <button onClick={() => setName('Johnny')}>Set Name</button>
      <button onClick={() => setAge(44)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  );
};

export default StorageComponent;
