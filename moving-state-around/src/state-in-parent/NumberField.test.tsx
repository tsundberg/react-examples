import React from "react";
import {shallow} from "enzyme";
import NumberField from "./NumberField";

test('should render without crashing', () => {
    const sendValue = jest.fn();
    shallow(<NumberField id={"4711"} value={0} sendValue={sendValue}/>);
});

test('should send number to controlling component', () => {
    const sendValue = jest.fn();
    const event: any = {currentTarget: {value: "43"}};
    let wrapper = shallow(<NumberField id={"4711"}
                                       value={0}
                                       sendValue={sendValue}/>);
    const numberField = wrapper.instance() as NumberField;

    numberField.handleChange(event);

    expect(sendValue).toBeCalledWith(43);
});

test('should connect the input to the on change handler', () => {
    const handleChange = jest.fn();
    const sendValue = jest.fn();
    const event = {currentTarget: {value: "43"}};
    let wrapper = shallow(<NumberField id={"non-numeric"}
                                       value={0}
                                       sendValue={sendValue}/>);

    const numberField = wrapper.instance() as NumberField;
    numberField.handleChange = handleChange;

    wrapper.find('#non-numeric').simulate('change', event);

    expect(handleChange).toBeCalledWith(event);
});