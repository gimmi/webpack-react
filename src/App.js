import React, { useState } from 'react';
import "./App.css";
export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="app">You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}
