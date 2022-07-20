import React, { useState, useEffect } from "react";
import {Row,Col,Button,Container} from 'react-bootstrap';
import Add from './Components/Add'
import Sub from './Components/Sub'
import Mul from './Components/Mul'
import Div from './Components/Div'

function App() {
  const [changes, setChange]=useState(false);
  const [val, setVal]=useState(0);

  const onClick=(str)=>{
   setChange(!changes)
   if(str==='add')
    setVal(1)
    else if(str==='sub')
    setVal(2)
    else if(str==='mul')
    setVal(3)
    else if(str==='div')
    setVal(4)
  }
  
  return (
    <Container className="bg-info" style={{height:'400px', width:'400px'}}>
    {!changes?
    <>
      <h1 className="text-center">
        Buttons
      </h1>
      <Row className="m-5">
        <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <Button onClick={()=>onClick('add')}>Add</Button>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <Button onClick={()=>onClick('sub')}>Sub</Button>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <Button onClick={()=>onClick('mul')}>Mul</Button>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <Button onClick={()=>onClick('div')}>Div</Button>
        </Col>
      </Row>
    </>
    :
    val===1?
      <Add/>
      :
      val==2?
        <Sub/>
        :val===3?
          <Mul/>
          :
          <Div/>
    }

    <Button onClick={onClick}>Back</Button>
    </Container>
  );
}

export default App;
