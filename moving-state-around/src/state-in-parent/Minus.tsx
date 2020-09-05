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
        return this.state.first - this.state.second;
    }

    receiveFirst(value: number): void {
        this.setState({first: value});
    }

    receiveSecond(value: number): void {
        this.setState({second: value});
    }

    render() {
        return <div>
            <NumberField value={this.state.first}
                         sendValue={this.receiveFirst}/>
            <NumberField value={this.state.second}
                         sendValue={this.receiveSecond}/>
        </div>
    }
}

export default Minus;
