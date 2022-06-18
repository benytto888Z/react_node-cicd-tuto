import React, {useState,useEffect} from 'react';
import axios from 'axios';
import eagle from './eagle.png';
import './App.css';

function App() {
  const [username,setUserName] = useState("");

  useEffect(() => {
     getNames();
     
  }, []);

  const getNames = async ()=>{
     const response = await axios.get('/names');
     console.log(response)
     setUserName(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginBottom : 100}}>
          <h1 >God Eagle Paradise</h1>
          <h2>My name is {username}</h2>
          <h2>I have a second firsname : Bienvenu</h2>
          <h3>I am DevOps and IT Consultant IBM product at NSI</h3>
          <h5>This is my world</h5>
        </div>
        
        <img src={eagle} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
