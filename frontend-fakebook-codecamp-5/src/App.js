import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [text, setText] = useState("")
  
  useEffect(()=>{
    const fetchText = () => {
      axios.get('http://localhost:5510/users/test').then((res)=>{
        setText(res.data);
      })
    }

    fetchText();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code style={{color:"green"}}>{text}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
