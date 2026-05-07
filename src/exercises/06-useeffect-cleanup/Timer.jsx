// Build this:
// - A timer that counts seconds (1, 2, 3...)
// - Starts when component mounts
// - A toggle button that hides/shows the timer component
// - When hidden, timer should STOP completely
// - When shown again, timer resets to 0

import React, { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    function handleButton() {}

    return (
        <>
            <h1>{seconds}</h1>
        </>
    );
}
export default Timer;
