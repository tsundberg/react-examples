import React from 'react';
import './App.css';
import CalculatorStateInLeaf from "./state-in-leaf/Calculator";
import CalculatorStateInParent from "./state-in-parent/Calculator";

interface Props {
}

interface State {
    children: React.RefObject<React.Component> [];
}

class App extends React.Component<Props, State> {
    state = {
        children: []
    }

    stateInLeaf: React.RefObject<CalculatorStateInLeaf>;
    stateInParent: React.RefObject<CalculatorStateInParent>;

    constructor(props: Props) {
        super(props);
        this.stateInLeaf = React.createRef();
        this.stateInParent = React.createRef();
    }

    calculate() {
        console.log("Calculate")

        this.state.children.forEach(child => {
            // @ts-ignore
            if (child.current !== null) {
                // @ts-ignore

                console.log("child", child);

                // @ts-ignore
                child.current.calculate();
            }
        });
    }

    addChild(): React.RefObject<any> {
        const child = React.createRef();
        // @ts-ignore
        this.state.children.push(child);

        return child;
    }

    render() {
        return (
            <div>
                <div>
                    <h2>State in leaf</h2>
                    <CalculatorStateInLeaf ref={this.addChild()}/>

                    <h2>State in parent</h2>
                    <CalculatorStateInParent ref={this.addChild()}/>
                </div>

                <button onClick={() => this.calculate()}>Calculate</button>
            </div>
        );
    }
}

export default App;
