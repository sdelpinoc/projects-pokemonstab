import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import { pokemonSlice } from '../../src/store/slices/pokemonSlice';
import { initialStatePokemon } from '../fixtures/pokemonState';
import TypesSelectionSection from '../../src/components/TypesSelectionSection';

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

describe('Testing in <TypesSelectionSection />', () => {
    test('should render correctly with the initial state', () => {
        const mockStore = getMockStore(initialStatePokemon);

        render(
            <Provider store={mockStore}>
                <TypesSelectionSection />
            </Provider>
        );
        screen.debug();

        expect(screen.getAllByText('-').length).toBe(6);
    });
});