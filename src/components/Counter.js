import { useState, useEffect, useCallback } from 'react';

import { setMinimum } from '../util';

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

    const handleKeyPress = useCallback((keyEvent) => {
        switch (keyEvent.key) {
        case "+":
            incrementCount();
            break;
        case "-":
            decrementCount();
            break;
        case "0":
            resetCount();
            break;
        default:
            break;
        }
    }, [incrementCount, decrementCount, resetCount])

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
        document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    const defaultFontSize = 10;
    let [fontSize, setFontSize] = useState(defaultFontSize);
    setFontSize = setMinimum(setFontSize, 5);

    function incrementFont() {
        setFontSize(fontSize +  5);
    }
    function decrementFont() {
        setFontSize(fontSize -  5);
    }
    function resetFont() {
        setFontSize(defaultFontSize);
    }
   
    return <div class='d-flex flex-column align-items-center justify-content-center' style={{flexGrow: 1}}>
                    <div>
                        <p style={{fontSize: fontSize + "vh"}}>
                            Take { count }
                        </p>
                    </div>
                    <div class=''>
                        <button class="btn btn-primary m-1" onClick={incrementCount}>+</button>
                        <button class='btn btn-primary m-1' onClick={decrementCount}>-</button>
                        <button class='btn btn-primary m-1' onClick={resetCount}>reset</button>
                    </div>
                    <div class=''>
                        <button class="btn btn-secondary m-1" onClick={incrementFont}>big</button>
                        <button class='btn btn-secondary m-1' onClick={decrementFont}>small</button>
                        <button class='btn btn-secondary m-1' onClick={resetFont}>def</button>
                    </div>
            </div>
}

export default Counter;
