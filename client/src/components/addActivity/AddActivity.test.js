import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* import configureStore from "redux-mock-store"; */
import { AddActivity } from './AddActivity.jsx';

configure({ adapter: new Adapter() });

describe('<AddActivity />', () => {

    describe('Estructura', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<AddActivity />);
        })
        it('Renderiza un <form>', () => {
            expect(wrapper.find('form')).toHaveLength(1)
        })

        it('Renderiza un input con la propiedad "name" igual a "name"', () => {
            expect(wrapper.find('input[name="name"]')).toHaveLength(1);
        })

        it('Renderiza un input con la propiedad "name" igual a "season"', () => {
            expect(wrapper.find('input[name="season"]')).toHaveLength(1);
        })

        it('Renderiza una option con la propiedad "name" igual a "difficulty"', () => {
            expect(wrapper.find('option[name="difficulty"]')).toHaveLength(1);
        })

        it('Renderiza un input con la propiedad "name" igual a "duration"', () => {
            expect(wrapper.find('input[name="duration"]')).toHaveLength(1);
        })

        it('Renderiza una option con la propiedad "name" igual a "countries"', () => {
            expect(wrapper.find('option[name="countries"]')).toHaveLength(1);
        })

        it('Renderiza un boton con el "type" "submit"', () => {
            expect(wrapper.find('button[type="submit"]')).toHaveLength(1)
        })
    })
})