# React Practice Exercises

Small exercises built while learning React fundamentals.

## Topics Covered

- useState (basic, objects, arrays, updater function)
- Dynamic styling (CSS Modules + inline styles)
- Event handling and controlled inputs
- useEffect (basic, dependency array, cleanup)
- API fetching (async/await, loading state, error handling, AbortController)
- Conditional rendering (&&, ternary)
- Props (data props, function props, unidirectional data flow)
- React Router (BrowserRouter, Routes, Route, NavLink, dynamic routing)

## Exercises

| #   | Topic                                                                      | Component            |
| --- | -------------------------------------------------------------------------- | -------------------- |
| 01  | useState — counter with increment, decrement, reset                        | `Counter.jsx`        |
| 02  | useState — dynamic color picker with reset                                 | `ColorPicker.jsx`    |
| 03  | Event handling — live form with object state and computed property keys    | `LiveForm.jsx`       |
| 04  | useEffect — basic side effect with dependency array                        | `EffectCounter.jsx`  |
| 05  | useEffect — tracking specific state changes with dependency array          | `DependencyTest.jsx` |
| 06  | useEffect — cleanup function with interval and mount/unmount               | `Timer.jsx`          |
| 07  | API fetching — joke fetcher with loading, error state, and AbortController | `JokeFetcher.jsx`    |
| 08  | Props — parent-child communication with data and function props            | `PropsDemo.jsx`      |

## Project Structure

```
react-practice-exercises/
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    └── exercises/
        ├── 01-usestate-counter/
        │   └── Counter.jsx
        ├── 02-usestate-color-picker/
        │   └── ColorPicker.jsx
        ├── 03-event-handling-form/
        │   └── LiveForm.jsx
        ├── 04-useeffect-basic/
        │   └── EffectCounter.jsx
        ├── 05-useeffect-dependency/
        │   └── DependencyTest.jsx
        ├── 06-useeffect-cleanup/
        │   └── Timer.jsx
        ├── 07-api-fetching/
        │   └── JokeFetcher.jsx
        └── 08-props-basics/
            ├── ButtonControl.jsx
            ├── Display.jsx
            └── PropsDemo.jsx
```

## Navigation

Each exercise is accessible via its own route using React Router:

| Route             | Exercise          |
| ----------------- | ----------------- |
| `/`               | Counter (default) |
| `/Counter`        | Counter           |
| `/ColorPicker`    | Color Picker      |
| `/LiveForm`       | Live Form         |
| `/EffectCounter`  | Effect Counter    |
| `/DependencyTest` | Dependency Test   |
| `/ToggleTimer`    | Toggle Timer      |
| `/JokeFetcher`    | Joke Fetcher      |
| `/PropsDemo`      | Props Basics      |

## Purpose

Practice repo for hands-on React learning. Each exercise is built from memory after studying the concept — no copying from tutorials.

## Run Locally

```bash
git clone https://github.com/neel1209/react-practice-exercises.git
cd react-practice-exercises
npm install
npm run dev
```
