import React, { useReducer, useState, useEffect } from 'react';
import './CSS/BasicCalci.css';
let initialValue = 0;

let calciReducer = (cdata, action) => {
  switch (action.type) {
    case '+':
      return action.payload.num1 + action.payload.num2;
    case '-':
      return action.payload.num1 - action.payload.num2;
    case '*':
      return action.payload.num1 * action.payload.num2;
    case '/':
      return action.payload.num1 / action.payload.num2;
    case '%':
      return (action.payload.num1 / action.payload.num2)*100;
    case '**':
      return action.payload.num1 ** action.payload.num2;
    default:
      return cdata;
  }
};
function BasicCalci() {
  let [action, setAction] = useState('');
  let [num1, setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [result, dataDispatcher] = useReducer(calciReducer, initialValue);
  
  useEffect(() => {
    if (num1 && num2) {
      dataDispatcher({type: action, payload: { num1: parseFloat(num1), num2: parseFloat(num2)},
      });
    }
  }, [action, num1, num2]);

  let updateNum1 = ({ target: { value } }) => {
    setNum1(value);
  };

  let updateNum2 = ({ target: { value } }) => {
    setNum2(value);
  };
  return (
    <div className='calci'>
      <h1>BASIC-CALCULATOR</h1>
      <input type="text" placeholder='Enter number' onChange={updateNum1} />
      <input type="text" placeholder='Enter number' onChange={updateNum2} />
      <h1>RESULT:{result}</h1>
      <button onClick={() => setAction('+')}>+</button>
      <button onClick={() => setAction('-')}>-</button>
      <button onClick={() => setAction('*')}>*</button>
      <button onClick={() => setAction('/')}>/</button>
      <button onClick={() => setAction('%')}>%</button>
      <button onClick={() => setAction('**')}>**</button>
    </div>
  );
}
export default BasicCalci;
