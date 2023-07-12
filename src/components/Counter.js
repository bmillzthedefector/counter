import { useState, useEffect, useCallback } from 'react';

import { setMinimum, useKeyHandler } from '../util';

const fontSize = "7em";

const incrementKey = "+";
const decrementKey = "-";
const resetKey = "0";

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
    }, [count])

    useKeyHandler((keyEvent) => {
        switch (keyEvent.key) {
            case incrementKey:
                incrementCount();
                break;
            case decrementKey:
                decrementCount();
                break;
            case resetKey:
                resetCount();
                break;
            default:
                break;
        }
    });

    return <div className='d-flex flex-column align-items-center justify-content-center' style={{flexGrow: 1}}>
             <div className='h-100' style={{flexGrow: 1}}/>
             <div className='d-flex flex-column align-items-center justify-content-center'>
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
                                width: 6 + (4.5 * Math.floor(Math.log10(count))) + "rem"}}
                        />
               </div>
               <div className=''>
                 <button className='btn btn-primary m-1' onClick={decrementCount}>-</button>
                 <button className='btn btn-primary m-1' onClick={resetCount}>reset</button>
                 <button className="btn btn-primary m-1" onClick={incrementCount}>+</button>
               </div>
             </div>
             <div className='h-100 d-flex flex-column align-items-center justify-content-center' style={{flexGrow: 1}}>
               <small className='text-center'>
                 "{ incrementKey }" key: next take <br/>
                 "{ decrementKey }" key: previous take <br/>
                 "{ resetKey }" key: reset to 1
               </small>
             </div>
            </div>
}

export default Counter;
