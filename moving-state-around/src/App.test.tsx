import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    let wrapper = shallow(<App/>);
    const app = wrapper.instance() as App;
    app.calculate();
});