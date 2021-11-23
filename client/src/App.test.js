import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Home from "./components/Home/Home";
import AddActivity from "./components/AddActivity/AddActivity";
import Landing from "./components/Landing/Landing";
import Card from "./components/Card/Card";

configure({adapter: new Adapter()})

describe('App', () => {
    let store;
    const middlewares = []
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
        store = mockStore([]);
    });

    describe('Rutas', () => {
        it('Debería renderizarse en la ruta / (Sólo en la ruta "/")', () => {
            const wrapper = shallow(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                        <Landing />
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(Landing)).toHaveLength(1)
        })
        it('Debería renderizarse en la ruta "/countries"', () => {
            const wrapper = shallow(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/countries']}>
                        <Home />
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(Home)).toHaveLength(1)
        })
        it('Debería renderizarse en la ruta "/countries/:id"', () => {
            const wrapper = shallow(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/countries/:id']}>
                        <Card />
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(Card)).toHaveLength(1)
        })
        it('Debería renderizarse en la ruta "/activity"', () => {
            const wrapper = shallow(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/activity']}>
                        <AddActivity />
                    </MemoryRouter>
                </Provider>
            )
            expect(wrapper.find(AddActivity)).toHaveLength(1)
        })
    })
})
