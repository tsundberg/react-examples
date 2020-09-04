import React from "react";
import {shallow} from "enzyme";
import Minus from "./Minus";

test('should render without crashing', () => {
    let wrapper = shallow(<Minus/>);
    const numberField = wrapper.instance() as Minus;
});