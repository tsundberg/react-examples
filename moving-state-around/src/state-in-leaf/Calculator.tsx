import React from 'react';

interface Props {
}

interface State {
    result: number
}

class Calculator extends React.Component<Props, State> {
    state = {
        result: 0
    }

    calculate() {
        this.setState({result: 17});
    }

    render() {
        return <div>
            Calculator, state in leaf - {this.state.result}
        </div>
    }
}

export default Calculator;
