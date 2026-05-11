import styles from "../../assets/Counter.module.css";
import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount((c) => c - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const increment = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <div className={styles.counterContainer}>
                <p className={styles.countDisplay}>{count}</p>
                <button className={styles.btn} onClick={decrement}>
                    Decrement
                </button>
                <button className={styles.btn} onClick={reset}>
                    Reset
                </button>
                <button className={styles.btn} onClick={increment}>
                    Increment
                </button>
            </div>
        </>
    );
}
export default Counter;
