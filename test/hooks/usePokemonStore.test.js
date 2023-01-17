import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook } from '@testing-library/react';

import { initialStatePokemon } from '../fixtures/pokemonState';
import { pokemonSlice } from '../../src/store/slices/pokemonSlice';
import { usePokemonStore } from '../../src/hooks/usePokemonStore';
import { types } from '../fixtures/types';

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

describe('Testing usePokemonStore', () => {
    test('Should return the initial/default values', () => {

        const mockStore = getMockStore(initialStatePokemon);

        const { result } = renderHook(() => usePokemonStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });
        // console.log(result);
        // console.log(result.current);

        expect(result.current).toEqual({
            matchingPokemon: [],
            selectedTypes: [],
            activeTypes: [],
            lastSelections: [],
            selectedPokemon: { name: '' },
            weaknessToTypes: [],
            superWeaknessToTypes: [],
            resistantToTypes: [],
            superResistantToTypes: [],
            inmuneToTypes: [],
            superEffectiveTypes: [],
            notVeryEffectiveTypes: [],
            withoutEffectTypes: [],
            loadingPokemonList: false,
            addSelectedType: expect.any(Function),
            removeAllInformation: expect.any(Function),
            removeSelectedType: expect.any(Function),
            removeSelectedTypes: expect.any(Function),
            setActiveType: expect.any(Function),
            loadDetails: expect.any(Function),
            getPokemonList: expect.any(Function),
            clearMatchingPokemon: expect.any(Function),
            setSelectedPokemon: expect.any(Function),
            removeSelectedPokemon: expect.any(Function)
        });
    });

    test('Should add the type to the selectedTypes of the store', () => {
        const mockStore = getMockStore(initialStatePokemon);

        const { result } = renderHook(() => usePokemonStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const { addSelectedType } = result.current;

        act(() => {
            addSelectedType(types[0]);
        });

        // Only change the value in the 'result.current.selectedTypes'
        // console.log({ result: result.current.selectedTypes, selectedTypes });

        expect(result.current.selectedTypes.length).toBe(1);

        expect(result.current.selectedTypes[0]).toEqual(types[0]);
    });

    test('Should add the types to activeTypes of the store', () => {
        const mockStore = getMockStore(initialStatePokemon);

        const { result } = renderHook(() => usePokemonStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const { setActiveType } = result.current;

        act(() => {
            // types come from fixtures/types.js
            setActiveType([types[1], types[0]]);
        });

        expect(result.current.activeTypes.length).toBe(2);

        expect(result.current.activeTypes[0]).toEqual(types[1]);
        expect(result.current.activeTypes[1]).toEqual(types[0]);
    });
});