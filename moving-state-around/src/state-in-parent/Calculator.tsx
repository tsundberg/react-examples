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
        this.setState({result: 4711});
    }

    render() {
        return <div>
            Calculator, state in parent - {this.state.result}
        </div>
    }
}

export default Calculator;
