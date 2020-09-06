import React from 'react';
import NumberField from "./NumberField";

interface Props {
}

interface State {
    first: number,
    second: number
}

class Minus extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.receiveFirst = this.receiveFirst.bind(this);
        this.receiveSecond = this.receiveSecond.bind(this);

        this.state = {
            first: 0,
            second: 0,
        }
    }

    getResult(): number {
        const first = this.state.first;
        const second = this.state.second;

        return first - second;
    }

    receiveFirst(value: number): void {
        this.setState({first: value});
    }

    receiveSecond(value: number): void {
        this.setState({second: value});
    }

    render() {
        return <div>
            <NumberField id={"first"}
                         value={this.state.first}
                         sendValue={this.receiveFirst}/>
            <NumberField id={"second"}
                         value={this.state.second}
                         sendValue={this.receiveSecond}/>
        </div>
    }
}

export default Minus;
