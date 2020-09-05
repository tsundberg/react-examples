import React from 'react';
import {Calc} from "../components/Calc";
import Minus from "./Minus";

interface Props {
}

interface State {
    result: number
}

class Calculator extends Calc<Props, State> {
    minus: React.RefObject<Minus>;

    constructor(props: Props) {
        super(props);

        this.minus = React.createRef();
    }

    state = {
        result: 0
    }

    calculate(): any {
        if (this.minus.current !== null) {
            const result = this.minus.current.getResult();
            this.setState({result: result});
        }
    }

    render() {
        return <div>
            <Minus ref={this.minus}/> = {this.state.result}
        </div>
    }
}

export default Calculator;
