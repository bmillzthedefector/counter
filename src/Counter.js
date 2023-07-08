import { useState, useEffect, useCallback } from 'react';

import { setMinimum } from './App';

function Counter() {
    let [count, setCount] = useState(1);

    setCount = setMinimum(setCount);

    function incrementCount() {
        setCount(count + 1);
    }
    function decrementCount() {
        setCount(count - 1);
    }
    function resetCount() {
        setCount(1);
    }

    useEffect(() => {
        document.title = "Take " + count;
    }, [count])

    const handleKeyPress = useCallback((keyEvent) => {
        switch (keyEvent.key) {
        case "+":
            setCount(count + 1);
            break;
        case "-":
            decrementCount();
            break;
        case "0":
            resetCount();
            break;
        }
    })

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
   
    return <div class='d-flex flex-column justify-content-center align-items-center' >
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