import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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
    const tabs = [
        { id: "Counter", label: "Counter", element: <Counter /> },
        { id: "ColorPicker", label: "Color Picker", element: <ColorPicker /> },
        { id: "LiveForm", label: "Live Form", element: <LiveForm /> },
        {
            id: "EffectCounter",
            label: "Effect Counter",
            element: <EffectCounter />,
        },
        {
            id: "DependencyTest",
            label: "Dependency Test",
            element: <DependencyTest />,
        },
        { id: "ToggleTimer", label: "Toggle Timer", element: <ToggleTimer /> },
        { id: "JokeFetcher", label: "Joke Fetcher", element: <JokeFetcher /> },
        { id: "PropsDemo", label: "Props Basics", element: <PropsDemo /> },
    ];
    return (
        <>
            <BrowserRouter>
                <nav className="nav">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.id}
                            to={`/${tab.id}`}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {tab.label}
                        </NavLink>
                    ))}
                </nav>
                <Routes>
                    <Route path="/" element={<Counter />} />
                    {tabs.map((tab) => (
                        <Route
                            key={tab.id}
                            path={`/${tab.id}`}
                            element={tab.element}
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
