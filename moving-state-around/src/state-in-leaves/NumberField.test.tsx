import React from "react";
import {shallow} from "enzyme";
import NumberField from "./NumberField";

test('should render without crashing', () => {
    shallow(<NumberField id={"non-numeric"}/>);
});

test('should connect the input to the on change handler', () => {
    const event = {currentTarget: {value: "43"}};
    let wrapper = shallow(<NumberField id={"non-numeric"}/>);
    const numberField = wrapper.instance() as NumberField;
    const handleChange = jest.fn();
    numberField.handleChange = handleChange;
    const input = wrapper.find('#non-numeric');

    input.simulate('change', event);

    expect(handleChange).toBeCalledWith(event);
});

test('should prepare a value to be collected', () => {
    const event: any = {currentTarget: {value: "43"}};
    let wrapper = shallow(<NumberField id={"non-numeric"}/>);
    const numberField = wrapper.instance() as NumberField;

    numberField.handleChange(event);
    const actual: number = numberField.getValue();

    expect(actual).toEqual(43)
});