import React from 'react';
import './App.css';
import CalculatorStateInLeaf from "./state-in-leaf/Calculator";
import CalculatorStateInParent from "./state-in-parent/Calculator";

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
    stateInLeaf: React.RefObject<CalculatorStateInLeaf>;
    stateInParent: React.RefObject<CalculatorStateInParent>;

    constructor(props: Props) {
        super(props);
        this.stateInLeaf = React.createRef();
        this.stateInParent = React.createRef();
    }

    calculate() {
        console.log("Calculate")

        if (this.stateInLeaf.current !== null) {
            this.stateInLeaf.current.calculate();
        }

        if (this.stateInParent.current !== null) {
            this.stateInParent.current.calculate();
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>State in leaf</h2>
                    <CalculatorStateInLeaf ref={this.stateInLeaf}/>

                    <h2>State in parent</h2>
                    <CalculatorStateInParent ref={this.stateInParent}/>
                </div>

                <button onClick={() => this.calculate()}>Calculate</button>
            </div>
        );
    }
}

export default App;
