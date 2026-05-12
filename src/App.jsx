import { useState } from "react";
import Counter from "./exercises/01-usestate-counter/Counter";
import ColorPicker from "./exercises/02-usestate-color-picker/ColorPicker";
import LiveForm from "./exercises/03-event-handling-form/LiveForm";
import EffectCounter from "./exercises/04-useeffect-basic/EffectCounter";
import DependencyTest from "./exercises/05-useeffect-dependency/DependencyTest";
import ToggleTimer from "./exercises/06-useeffect-cleanup/ToggleTimer";
import JokeFetcher from "./exercises/07-api-fetching/JokeFetcher";
import PropsDemo from "./exercises/08-props-basics/PropsDemo";
import "./App.css";

function App() {
    const [active, setActive] = useState("Counter");
    const tabs = [
        { id: "Counter", label: "Counter" },
        { id: "ColorPicker", label: "Color Picker" },
        { id: "LiveForm", label: "Live Form" },
        { id: "EffectCounter", label: "Effect Counter" },
        { id: "DependencyTest", label: "Dependency Test" },
        { id: "ToggleTimer", label: "Toggle Timer" },
        { id: "JokeFetcher", label: "Joke Fetcher" },
        { id: "PropsDemo", label: "Props Basics" },
    ];
    return (
        <>
            <nav className="nav">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={active === tab.id ? "active" : ""}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            <div className="exercise-container">
                {active === "Counter" && <Counter />}
                {active === "ColorPicker" && <ColorPicker />}
                {active === "LiveForm" && <LiveForm />}
                {active === "EffectCounter" && <EffectCounter />}
                {active === "DependencyTest" && <DependencyTest />}
                {active === "ToggleTimer" && <ToggleTimer />}
                {active === "JokeFetcher" && <JokeFetcher />}
                {active === "PropsDemo" && <PropsDemo />}
            </div>
        </>
    );
}

export default App;
