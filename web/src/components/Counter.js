import React from 'react';
import { useState, useEffect, useCallback } from 'react';

import { setMinimum, useKeyHandler, calcTextWidth } from '../util';

const fontSize = "7em";

function Counter() {
  let [count, setCount] = useState(1);

  setCount = setMinimum(setCount);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);
  const decrementCount = useCallback(() => {
    setCount(count - 1);
  }, [count, setCount])
  const resetCount = useCallback(() => {
    setCount(1);
  }, [setCount]);

  useEffect(() => {
    document.title = "Take " + count;
  }, [count]);

  // Electron global keyboard shortcuts
  useEffect(() => {
    if (window.counter !== undefined) {
      window.counter.handleIncrement((event) => {
        incrementCount();
      });
    }
  }, [incrementCount]);
  useEffect(() => {
    if (window.counter !== undefined) {
      window.counter.handleDecrement((event) => {
        decrementCount();
      });
    }
  }, [decrementCount]);
  useEffect(() => {
    if (window.counter !== undefined) {
      window.counter.handleReset((event) => {
        resetCount();
      });
    }
  }, [resetCount]);

  return <div className='d-flex flex-column align-items-center justify-content-center' style={{flexGrow: 1}}>
             <div className="d-flex">
               <h1 style={{fontSize: fontSize}}>
                 Take
               </h1>
               <input className="bg-transparent h1 text-white border-0"
                      type="text"
                      value= { " " + count }
                      readOnly={ true }
                      style={{outline: "none",
                              fontSize: fontSize,
                              textAlign: "right",
                              width: calcTextWidth(" " + count)}}
               />
             </div>
             <div className=''>
               <button className='btn btn-primary m-1' onClick={decrementCount}>-</button>
               <button className='btn btn-primary m-1' onClick={resetCount}>reset</button>
               <button className="btn btn-primary m-1" onClick={incrementCount}>+</button>
             </div>
         </div>
}

export default Counter;
