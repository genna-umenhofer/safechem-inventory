import {useEffect, useState} from 'react';

function App() {
  const [chemicals, setChemicals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/chemicals')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Chemical Inventory</h1>
      <ul>
        {chemicals.map((chemical) => (
          <li key={chemical.name}> {chemical.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;