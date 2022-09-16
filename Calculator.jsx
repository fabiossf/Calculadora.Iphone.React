import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function Calculator() {  
  const[num,setNum] = useState(0);
  const[oldnum, setOldNum] = useState(0);
  const[operator,setOperator] = useState(0);

  function inputNum(e){
    var input=e.target.value
    if(num===0) {
      setNum(input);
    }else{
      setNum(num + input);
    }
  }

  function clear(e){
    setNum(0)
  }

  function porcentage() {
    setNum(num / 100)
  }

  function mudarSinal(){
    if(num>0){
      setNum(-num)
    }else{
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e){
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }
 
  function calcular(){
    if (operator === "/"){
      setNum(parseFloat(oldnum) / parseFloat(num));
    }else if (operator === "X"){
        setNum(parseFloat(oldnum) * parseFloat(num));
    }else if (operator === "+"){
        setNum(parseFloat(oldnum) + parseFloat(num));
    }else if (operator === "-"){
        setNum(parseFloat(oldnum) - parseFloat(num));
    }  
  }

  return (

    <div>
      
      <Box m={5}/>
      
     <Container maxWidth="xs">
      <div className="wrapper">
       <Box m={10} />

          <h1 className='Result'>{num}</h1>

        <button className='whitegrey' onClick={clear}>AC</button>
        <button className='whitegrey' onClick={mudarSinal}>+/-</button>
        <button className='whitegrey' onClick={porcentage}>%</button>
        <button className='orange' onClick={operatorHandler} value={"/"}>/</button>
        <button className='grey' onClick={inputNum} value={7}>7</button>
        <button className='grey' onClick={inputNum} value={8}>8</button>
        <button className='grey' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operatorHandler} value={"X"}>X</button>
        <button className='grey' onClick={inputNum} value={4}>4</button>
        <button className='grey' onClick={inputNum} value={5}>5</button>
        <button className='grey' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
        <button className='grey' onClick={inputNum} value={1}>1</button>
        <button className='grey' onClick={inputNum} value={2}>2</button>
        <button className='grey' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
        <button className='grey' onClick={inputNum} value={0}>0</button>
        <button className='grey' onClick={inputNum} value={"."}>,</button>
        <button className='orange' onClick={calcular} value={"="}>=</button>
        

      </div>
    </Container>
  </div>
  )
}
