import { configureStore } from '@reduxjs/toolkit';
import { prettyDOM, render, screen } from '@testing-library/react';

import TypesSection from '../../src/components/TypesSection';
import { pokemonSlice } from '../../src/store/slices/pokemonSlice';
import { initialStatePokemon } from '../fixtures/pokemonState';
// import { usePokemonStore } from '../../src/hooks/usePokemonStore';
import { Provider } from 'react-redux';

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

describe('Testing in <TypesSection />', () => {
    test('Should render correctly with the initial state', () => {

        const mockStore = getMockStore(initialStatePokemon);

        const component = render(
            <Provider store={mockStore}>
                <TypesSection />
            </Provider>
        );
        // screen.debug();
        // console.log(prettyDOM(component.container));
        const containerPokemonSearch = component.container.querySelector('.containerPokemonSearch');
        expect(containerPokemonSearch).toHaveStyle('display: block');

        expect(screen.getByLabelText('typesSectionTitle')).toBeTruthy();

        expect(screen.getByRole('textbox', { name: 'pokemonSearch' })).toBeTruthy();
        
        expect(screen.getAllByLabelText('TypesListType').length).toBe(18);

        expect(screen.getAllByText('-').length).toBe(1);

        expect(screen.getByRole('button', { name: 'search' })).toBeTruthy();
        expect(screen.getByRole('button', { name: 'clear' })).toBeTruthy();
    });
});