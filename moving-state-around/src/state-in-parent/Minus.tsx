import React from 'react';
import NumberField from "./NumberField";

interface Props {
}

interface State {
    first: number,
    second: number
}

class Minus extends React.Component<Props, State> {
    private readonly FIRST = "first";
    private readonly SECOND = "second";

    constructor(props: Props) {
        super(props);
        this.receiveValue = this.receiveValue.bind(this);
        this.state = {
            first: 0,
            second: 0,
        }
    }

    getResult(): number {
        return this.state.first - this.state.second;
    }

    receiveValue(value: number, sender: string): void {
        if (sender === this.FIRST) {
            this.setState({first: value});
        }
        if (sender === this.SECOND) {
            console.log(value, sender);
            this.setState({second: value});
        }
    }

    render() {
        return <div>
            <NumberField name={this.FIRST}
                         value={this.state.first}
                         sendValue={this.receiveValue}/>
            <NumberField name={this.SECOND}
                         value={this.state.second}
                         sendValue={this.receiveValue}/>
        </div>
    }
}

export default Minus;
