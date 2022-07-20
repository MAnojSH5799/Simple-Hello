import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';



function App1() {
  const [count, setCount] = useState("")
  const IncNum = () => {
    setCount("Hello World")
  }
  return (
    <div className="App">
    <h1>{count}</h1>
<button className='bg-primary' onClick={IncNum}>Click</button>
{/* onclick={() => setCount(count + 1)} */}
    </div>
  );
}

export default App1;
