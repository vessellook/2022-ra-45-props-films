import './App.css';
import { useState } from 'react';
import Stars from './components/Stars';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <input type="number" value={count} onChange={(event) => setCount(+event.target.value)} />
      <Stars count={count} />
    </div>
  );
}

export default App;
