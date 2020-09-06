import React from 'react';

interface Props {
    value: number
    sendValue: (value: number) => void;
    id: string
}

interface State {
}

class NumberField extends React.Component<Props, State> {

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const dirty = e.currentTarget.value;
        const number = Number(dirty);

        if (!isNaN(number)) {
            this.props.sendValue(number);
        }
    }

    render() {
        return <div>
            <input id={this.props.id}
                   value={this.props.value}
                   onChange={(e) => {
                       this.handleChange(e)
                   }}
            />
        </div>
    }
}

export default NumberField;
