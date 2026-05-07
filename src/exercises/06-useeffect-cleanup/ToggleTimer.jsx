import React, { useState, useEffect } from "react";
import Timer from "./Timer";
function ToggleTimer() {
    const [isVisible, setIsVisible] = useState(true);

    const toggle = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <>
            {isVisible && <Timer />}
            <button onClick={toggle}>{isVisible ? "Hide" : "Unhide"}</button>
        </>
    );
}
export default ToggleTimer;
