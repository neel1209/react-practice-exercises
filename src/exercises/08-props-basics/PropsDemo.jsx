import { useState } from "react";

import Display from "./Display";
import ButtonControl from "./ButtonControl";
function PropsDemo() {
    const [count, setCount] = useState(0);
    function increament() {
        setCount((prev) => prev + 1);
    }
    return (
        <>
            <Display count={count} />
            <ButtonControl onClick={increament} />
        </>
    );
}

export default PropsDemo;
