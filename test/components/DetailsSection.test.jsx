import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { initialStatePokemon } from "../fixtures/pokemonState";
import { pokemonSlice } from '../../src/store/slices/pokemonSlice';

import DetailsSection from '../../src/components/DetailsSection';

// We provide a custom store(of the pokemonSlice) for testing
const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            pokemon: pokemonSlice.reducer
        },
        preloadedState: {
            pokemon: { ...initialState }
        }
    })
};

describe('Testing in <DetailsSection />', () => {
    test('Should render correctly with the initial state', () => {
        const mockStore = getMockStore(initialStatePokemon);

        render(
            <Provider store={mockStore}>
                <DetailsSection />
            </Provider>
        );
        screen.debug();

        expect(screen.getAllByText('-').length).toBe(3);
    });
});