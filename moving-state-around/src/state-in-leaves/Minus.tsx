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

    private getFirst(): number {
        if (this.first.current !== null) {
            return this.first.current.getValue();
        }

        return 0;
    }

    private getSecond(): number {
        if (this.second.current !== null) {
            return this.second.current.getValue();
        }

        return 0;
    }

    render() {
        return <div>
            <NumberField id={"first"}
                         ref={this.first}/>
            <NumberField id={"second"}
                         ref={this.second}/>
        </div>
    }
}

export default Minus;
