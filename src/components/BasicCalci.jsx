import React, { useReducer, useState, useEffect } from 'react';
import './CSS/BasicCalci.css';

let initialValue = {
  num1: '',
  num2: '',
  result: 0,
};

let calciReducer = (state, action) => {
  switch (action.type) {
    case '+':
      return {
        ...state,
        result: action.payload.num1 + action.payload.num2,
      };
    case '-':
      return {
        ...state,
        result: action.payload.num1 - action.payload.num2,
      };
    case '*':
      return {
        ...state,
        result: action.payload.num1 * action.payload.num2,
      };
    case '/':
      return {
        ...state,
        result: action.payload.num1 / action.payload.num2,
      };
    case '%':
      return {
        ...state,
        result: (action.payload.num1 / action.payload.num2) * 100,
      };
    case '**':
      return {
        ...state,
        result: action.payload.num1 ** action.payload.num2,
      };
    case 'reset':
      return initialValue;
    case 'num1':
      return {
        ...state,
        num1: action.payload,
      };
    case 'num2':
      return {
        ...state,
        num2: action.payload,
      };
    default:
      return state;
  }
};

function BasicCalci() {
  let [action, setAction] = useState('');
  let [state, dataDispatcher] = useReducer(calciReducer, initialValue);

  useEffect(() => {
    if (state.num1 && state.num2) {
      dataDispatcher({
        type: action,
        payload: { num1: parseFloat(state.num1), num2: parseFloat(state.num2) },
      });
    }
  }, [action, state.num1, state.num2]);

  const handleReset = () => {
    dataDispatcher({ type: 'reset' });
  };

  return (
    <div className='calci'>
      <h1>BASIC-CALCULATOR</h1>
      <input
        type="text"
        placeholder='Enter number'
        onChange={(e) => dataDispatcher({
          type: 'num1',
          payload: e.target.value
        })}
        value={state.num1}
      />
      <input
        type="text"
        placeholder='Enter number'
        onChange={(e) => dataDispatcher({
          type: 'num2',
          payload: e.target.value
        })}
        value={state.num2}
      />
      <h1>RESULT:{state.result}</h1>
      <button onClick={() => setAction('+')}>+</button>
      <button onClick={() => setAction('-')}>-</button>
      <button onClick={() => setAction('*')}>*</button>
      <button onClick={() => setAction('/')}>/</button>
      <button onClick={() => setAction('%')}>%</button>
      <button onClick={() => setAction('**')}>**</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default BasicCalci;
