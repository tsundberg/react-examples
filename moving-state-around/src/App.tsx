import React from 'react';
import './App.css';
import CalculatorStateInLeaf from "./state-in-leaf/Calculator";

class App extends React.Component {

    calculate() {
        console.log("Calculate")
    }

    render() {
        return (
            <div>
                <div>
                    <h2>State in leaf</h2>
                    <CalculatorStateInLeaf/>

                    <h2>State in parent</h2>
                    <CalculatorStateInLeaf/>
                </div>

                <button onClick={() => this.calculate()}>Calculate</button>
            </div>
        );
    }
}

export default App;
