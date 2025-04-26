import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message)) // Corrected 'message'
      .catch(err => console.error(err)); // Log errors to the console
  }, []);

  return (
    <div className="App">
      <h1>React + Express App</h1>
      <p>{message}</p> {/* Display message from the API */}
    </div>
  );
}

export default App;
