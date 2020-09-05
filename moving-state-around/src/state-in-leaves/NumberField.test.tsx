import React from "react";
import {shallow} from "enzyme";
import NumberField from "./NumberField";

test('should render without crashing', () => {
    let wrapper = shallow(<NumberField/>);
    const numberField = wrapper.instance() as NumberField;
});