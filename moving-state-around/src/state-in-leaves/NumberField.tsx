import React from 'react';

interface Props {
    id: string
}

interface State {
    value: string
}

class NumberField extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    getValue(): number {
        return Number(this.state.value);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const dirty = e.currentTarget.value;
        const number = Number(dirty);

        if (!isNaN(number)) {
            const value = '' + number;
            this.setState({value: value});
        }
    }

    render() {
        return <div>
            <input id={this.props.id}
                   value={this.state.value}
                   onChange={(e) => {
                       this.handleChange(e)
                   }}
            />
        </div>
    }
}

export default NumberField;
