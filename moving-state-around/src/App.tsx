import React, {RefObject} from 'react';
import './App.css';
import CalculatorStateInLeaf from "./state-in-leaf/Calculator";
import CalculatorStateInParent from "./state-in-parent/Calculator";
import {Calc} from "./components/Calc";

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
    children: React.RefObject<Calc<any, any>>[]

    constructor(props: Props) {
        super(props);

        this.children = [];
    }

    calculate() {
        this.children.forEach(child => {
            const current = child.current;
            if (current !== null) {
                current.calculate();
            }
        });
    }

    addChild(): React.RefObject<any> {
        const child: RefObject<any> = React.createRef();
        this.children.push(child);

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
