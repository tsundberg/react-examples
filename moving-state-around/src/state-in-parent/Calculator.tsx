import React from 'react';

interface Props {
}

interface State {
}

class Calculator extends React.Component<Props, State> {
    render() {
        return <div>
            Calculator, state in parent
        </div>
    }
}

export default Calculator;