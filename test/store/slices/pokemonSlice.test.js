import { onSetMatchingPokemon, pokemonSlice } from '../../../src/store/slices/pokemonSlice';
import { initialStatePokemon } from '../../fixtures/pokemonState';

describe('Testing in pokemonSlice', () => {
    test('Should return the initial state and be called "pokemon"', () => {
        expect(pokemonSlice.name).toBe('pokemon');

        const state = pokemonSlice.reducer(initialStatePokemon, {});

        expect(state).toEqual(initialStatePokemon);
    });

    test('Should add a matching pokemon', () => {
        // addNewEmptyNote
        const matchingPokemon = [{
            ndex: '001',
            name: 'Bulbasaur',
            types: ['Grass', 'Poison']
        }];

        const state = pokemonSlice.reducer(initialStatePokemon, onSetMatchingPokemon(matchingPokemon));
        // console.log({state});

        expect(state.matchingPokemon.length).toBe(1);

        expect(state.matchingPokemon[0]).toEqual(matchingPokemon[0]);
    });

    //TODO: test the rest of the slice, eventually...
});