import React from 'react';

interface Props {
    value: number
    name: string,
    sendValue: (value: number, sender: string) => void;
}

interface State {
}

class NumberField extends React.Component<Props, State> {
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const dirty = e.currentTarget.value;
        const number = Number(dirty);

        if (!isNaN(number)) {
            this.props.sendValue(number, this.props.name);
        }
    }

    render() {
        return <div>
            <input value={this.props.value}
                   onChange={(e) => {
                       this.handleChange(e)
                   }}
            />
        </div>
    }
}

export default NumberField;
