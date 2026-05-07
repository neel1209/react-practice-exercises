import { useState } from "react";
import EffectCounter from "./exercises/04-useeffect-basic/EffectCounter";
import DependencyTest from "./exercises/05-useeffect-dependency/DependencyTest";
import ToggleTimer from "./exercises/06-useeffect-cleanup/ToggleTimer";
import "./App.css";

function App() {
    return (
        <>
            {/* <EffectCounter /> */}
            {/*<DependencyTest /> */}
            <ToggleTimer />
        </>
    );
}

export default App;
