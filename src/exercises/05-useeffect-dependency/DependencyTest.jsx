// Build this:
// - Two buttons: increment A and increment B
// - Two counters: countA and countB
// - useEffect that ONLY runs when countA changes
//   and logs "A changed"
// - Prove it works: clicking B should NOT trigger the log
import React, { useState, useEffect } from "react";

function DependencyTest() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    useEffect(() => {
        console.log(`A changed to : ${countA}`);
    }, [countA]);

    return (
        <>
            <h1>Counter A : {countA}</h1>
            <button onClick={() => setCountA((prev) => prev + 1)}>+</button>

            <h1>Counter A : {countB}</h1>
            <button onClick={() => setCountB((prev) => prev + 1)}>+</button>
        </>
    );
}
export default DependencyTest;
