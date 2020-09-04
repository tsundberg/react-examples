import React from 'react';
import './App.css';
import CalculatorStateInLeaf from "./state-in-leaf/Calculator";

function App() {
    return (
        <div>
            <h2>State in leaf</h2>
            <CalculatorStateInLeaf/>

            <h2>State in parent</h2>
            <CalculatorStateInLeaf/>
        </div>
    );
}

export default App;
