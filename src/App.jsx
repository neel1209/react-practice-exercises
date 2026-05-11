import { useState } from "react";
import Counter from "./exercises/01-usestate-counter/Counter";
import ColorPicker from "./exercises/02-usestate-color-picker/ColorPicker";
import LiveForm from "./exercises/03-event-handling-form/LiveForm";
import EffectCounter from "./exercises/04-useeffect-basic/EffectCounter";
import DependencyTest from "./exercises/05-useeffect-dependency/DependencyTest";
import ToggleTimer from "./exercises/06-useeffect-cleanup/ToggleTimer";
import JokeFetcher from "./exercises/07-api-fetching/JokeFetcher";
import "./App.css";

function App() {
    return (
        <>
            {/* <Counter /> */}
            {/* <ColorPicker /> */}
            <LiveForm />
            {/* <EffectCounter /> */}
            {/*<DependencyTest /> */}
            {/*<ToggleTimer />*/}
            {/*<JokeFetcher />*/}
        </>
    );
}

export default App;
