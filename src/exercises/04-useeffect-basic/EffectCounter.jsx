// - A counter with increment button
// - Every time count changes, log to console:
//   "Count changed to: X"
// - Use useEffect for the logging
import React, { useState, useEffect } from "react";

function EffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Count chaged to: ${count}`);
    }, [count]);

    const handleButton = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleButton}>+</button>
        </>
    );
}
export default EffectCounter;
