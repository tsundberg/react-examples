import React from 'react';
import NumberField from "./NumberField";

interface Props {
}

interface State {
}

class Minus extends React.Component<Props, State> {
    first: React.RefObject<NumberField>;
    second: React.RefObject<NumberField>;

    constructor(props: Props) {
        super(props);

        this.first = React.createRef();
        this.second = React.createRef();
    }

    getResult(): number {
        const first: number = this.getFirst();
        const second: number = this.getSecond();

        return first - second;
    }

    private getFirst() {
        if (this.first.current !== null) {
            return this.first.current.getValue();
        }

        return 0;
    }

    private getSecond() {
        if (this.second.current !== null) {
            return this.second.current.getValue();
        }

        return 0;
    }

    render() {
        return <div>
            <NumberField ref={this.first}/>
            <NumberField ref={this.second}/>
        </div>
    }
}

export default Minus;
