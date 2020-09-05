import React from "react";
import {shallow} from "enzyme";
import NumberField from "./NumberField";

test('should render without crashing', () => {
    const sendValue = jest.fn();
    let wrapper = shallow(<NumberField value={0} sendValue={sendValue}/>);
    const numberField = wrapper.instance() as NumberField;
});