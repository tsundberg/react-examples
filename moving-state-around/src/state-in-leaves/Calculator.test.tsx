import React from "react";
import {shallow} from "enzyme";
import Calculator from "./Calculator";

test('should render without crashing', () => {
    let wrapper = shallow(<Calculator/>);
    const calculator = wrapper.instance() as Calculator;
});