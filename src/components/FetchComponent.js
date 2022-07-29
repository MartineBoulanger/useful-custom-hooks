import { useState } from 'react';
import { useFetch } from 'hooks/useFetch';

const FetchComponent = () => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://mockend.com/MartineBoulanger/dummy-data/users/${id}`,
    {},
    [id]
  );

  return (
    <>
      <p>{id}</p>
      <button onClick={() => setId((id) => id + 1)}>Increment ID</button>
      <p>Loading: {loading.toString()}</p>
      <p>json error: {JSON.stringify(error, null, 2)}</p>
      <p>json object: {JSON.stringify(value, null, 2)}</p>
      {value && (
        <div
          style={{
            marginTop: '20px',
            border: '1px solid black',
            borderRadius: '10px',
            padding: '1rem',
            margin: '5px',
            width: '300px',
            display: 'grid',
            alignContent: 'center',
            backgroundColor: value.color,
            boxShadow: '0 0 8px rgba(0,0,0,.4)',
          }}
        >
          <img
            style={{ borderRadius: '999px' }}
            src={value.avatar}
            alt={value.name}
          />
          <h1
            style={{
              margin: '20px 5px',
              fontSize: '1.5rem',
              fontWeight: '700',
            }}
          >
            {value.name}
          </h1>
          <p>Age: {value.age}</p>
          <p>Status: {value.statusMessage}</p>
          <p>Emailaddress: {value.email}</p>
        </div>
      )}
    </>
  );
};

export default FetchComponent;
