import { types } from './types';

export const initialStatePokemon = {
    matchingPokemon: [],
    // Maximum 2 types
    selectedTypes: [],
    // Maximum 2 types
    activeTypes: [],
    // Maximun 3 selection Array<(Array<types>)>
    lastSelections: [],

    selectedPokemon: {
        name: ''
    },

    weaknessToTypes: [],
    superWeaknessToTypes: [],
    resistantToTypes: [],
    superResistantToTypes: [],
    inmuneToTypes: [],

    // Could be selected 2 types
    superEffectiveTypes: [],
    notVeryEffectiveTypes: [],
    withoutEffectTypes: [],

    loadingPokemonList: false
}

export const initialStatePokemonWithSelectType = {
    matchingPokemon: [],
    // Maximum 2 types
    selectedTypes: [
        types[1]
    ],
    // Maximum 2 types
    activeTypes: [],
    // Maximun 3 selection Array<(Array<types>)>
    lastSelections: [],

    selectedPokemon: {
        name: ''
    },

    weaknessToTypes: [],
    superWeaknessToTypes: [],
    resistantToTypes: [],
    superResistantToTypes: [],
    inmuneToTypes: [],

    // Could be selected 2 types
    superEffectiveTypes: [],
    notVeryEffectiveTypes: [],
    withoutEffectTypes: [],

    loadingPokemonList: false
}