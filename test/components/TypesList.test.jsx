import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';

import { pokemonSlice } from '../../src/store/slices/pokemonSlice';
import { initialStatePokemon, initialStatePokemonWithSelectType } from '../fixtures/pokemonState';

import TypesList from '../../src/components/TypesList';
import { types } from '../../src/data/types';
import { usePokemonStore } from '../../src/hooks/usePokemonStore';

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

const mockAddSelectedType = jest.fn();
const mockRemoveSelectedType = jest.fn();

jest.mock('../../src/hooks/usePokemonStore');

describe('Testing in <TypesList />', () => {
    test('Should call setSelectedType when the type was clicked', () => { 
        const mockStore = getMockStore(initialStatePokemon);

        usePokemonStore.mockReturnValue({
            addSelectedType: mockAddSelectedType
        });
    
        render(
            <Provider store={mockStore}>
                <TypesList types={types} section={'TypesSection'}/>
            </Provider>
        );
        // screen.debug();
        
        const typeSelected = screen.getByText('Fire');
        fireEvent.click(typeSelected);

        expect(mockAddSelectedType).toHaveBeenCalledTimes(1);

        expect(mockAddSelectedType).toHaveBeenCalledWith(types[1]);

    });

    test('Should call removeSelectedType when the remove span of the selected type was clicked', () => { 
        const mockStore = getMockStore(initialStatePokemonWithSelectType);

        usePokemonStore.mockReturnValue({
            removeSelectedType: mockRemoveSelectedType
        });
    
        render(
            <Provider store={mockStore}>
                <TypesList types={[types[1]]} section={'SelectedType'}/>
            </Provider>
        );
        screen.debug();
        
        const typeSelected = screen.getByText('x');
        fireEvent.click(typeSelected);
        screen.debug();

        expect(mockRemoveSelectedType).toHaveBeenCalledTimes(1);

        expect(mockRemoveSelectedType).toHaveBeenCalledWith(types[1]);
    });
})