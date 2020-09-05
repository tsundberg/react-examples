import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('should call all children without crashing', () => {
    let wrapper = shallow(<App/>);
    const app = wrapper.instance() as App;
    app.calculate();
});