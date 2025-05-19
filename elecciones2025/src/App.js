// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [candidatos, setCandidatos] = useState([]);

  const cargar = async () => {
    const res = await axios.get('http://localhost:4000/candidatos');
    setCandidatos(res.data);
  };

  const votar = async (id) => {
    await axios.post(`http://localhost:4000/votar/${id}`);
    cargar(); // recargar datos
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Votaciones</h1>
      {candidatos.map((c) => (
        <div key={c.id} style={{ margin: 20 }}>
          <h2>{c.nombre}</h2>
          <p>Votos: {c.votos}</p>
          <button onClick={() => votar(c.id)}>Votar</button>
        </div>
      ))}
    </div>
  );
}

export default App;
