import React from 'react';
import {Calc} from "../components/Calc";

interface Props {
}

interface State {
    result: number
}

class Calculator extends Calc<Props, State> {
    state = {
        result: 0
    }

    calculate(): any {
        this.setState({result: 17});
    }

    render() {
        return <div>
            Calculator, state in leaf - {this.state.result}
        </div>
    }
}

export default Calculator;
