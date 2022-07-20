import React, { useState, useEffect } from "react";
import {Row,Col,Button,Container,Input} from 'react-bootstrap';

function App() {
  const [a, setA]=useState(0);
  const [b, setB]=useState(0);
  const [c, setC]=useState(0);

  const onClick=(x,y)=>{
     setC(+a + +b);
  }
  const onChangeA=(e)=>{
    setA(e.target.value)
   }

   const onChangeB=(e)=>{
    setB(e.target.value)
   }
  
  return (
    <>
    <h1 className="text-center">
        Add
    </h1>
    <h4>
        Enter numbers:
    </h4>
    <input onChange={onChangeA} className="m-2"/>
    <input onChange={onChangeB} className="m-2"/>

    <Button onClick={onClick} className="m-2">Add</Button>

    <h5>Results : {c}</h5> 
    </>
  );
}

export default App;
