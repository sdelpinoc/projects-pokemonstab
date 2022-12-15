import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
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
        withoutEffectTypes: []
    },
    reducers: {
        onSetMatchingPokemon: (state, action) => {
            state.matchingPokemon = [...action.payload];
        },
        onClearMatchingPokemon: state => {
            state.matchingPokemon = [];
        },
        onAddSelectedType: (state, action) => {
            const exists = state.selectedTypes.some(type => type.name === action.payload.name);

            if (!exists && state.selectedTypes.length < 2) {
                state.selectedTypes.push(action.payload);
            }
        },
        onRemoveSelectedType: (state, action) => {
            state.selectedTypes = state.selectedTypes.filter(type => type.name !== action.payload.name);
        },
        onRemoveSelectedTypes: state => {
            state.selectedTypes = [];
        },
        onRemoveAllInformation: state => {
            state.matchingPokemon = [];
            state.selectedTypes = [];
            state.activeTypes = [];
            state.lastSelections = [];
            state.selectedPokemon = {
                name: ''
            };

            state.weaknessToTypes = [];
            state.superWeaknessToTypes = [];
            state.resistantToTypes = [];
            state.superResistantToTypes = [];
            state.inmuneToTypes = [];

            state.superEffectiveTypes = [];
            state.notVeryEffectiveTypes = [];
            state.withoutEffectTypes = [];
        },
        onSetActiveType: (state, action) => {
            state.activeTypes = [...action.payload];
        },
        onSetLastSelections: (state, action) => {
            const lastSelections = [...state.lastSelections];

            if (action.payload.length !== 0) {
                if (lastSelections.length == 3) {
                    lastSelections.shift(); // Delete first element
                    lastSelections.push(action.payload);
                } else {
                    lastSelections.push(action.payload);
                }
            }

            state.lastSelections = [...lastSelections];
        },
        onSetSelectedPokemon: (state, action) => {
            state.selectedPokemon = { ...action.payload };
        },
        onRemoveSelectedPokemon: state => {
            state.selectedPokemon = {};
        },

        onLoadWeaknessToTypes: (state, action) => {
            state.weaknessToTypes = [...action.payload];
        },
        onLoadSuperWeaknessToTypes: (state, action) => {
            state.superWeaknessToTypes = [...action.payload];
        },
        onLoadResistantToTypes: (state, action) => {
            state.resistantToTypes = [...action.payload];
        },
        onLoadSuperResistantToTypes: (state, action) => {
            state.superResistantToTypes = [...action.payload];
        },
        onLoadInmuneToTypes: (state, action) => {
            state.inmuneToTypes = [...action.payload];
        },

        onLoadSuperEffectiveTypes: (state, action) => {
            if (action.payload.firstType !== undefined) {
                state.superEffectiveTypes[0] = [...action.payload.firstType];
            }

            if (action.payload.secondType !== undefined) {
                state.superEffectiveTypes[1] = [...action.payload.secondType];
            }
        },
        onLoadNotVeryEffectiveTypes: (state, action) => {
            if (action.payload.firstType !== undefined) {
                state.notVeryEffectiveTypes[0] = [...action.payload.firstType];
            }

            if (action.payload.secondType !== undefined) {
                state.notVeryEffectiveTypes[1] = [...action.payload.secondType];
            }
        },
        onLoadWithoutEffectTypes: (state, action) => {
            if (action.payload.firstType !== undefined) {
                state.withoutEffectTypes[0] = [...action.payload.firstType];
            }

            if (action.payload.secondType !== undefined) {
                state.withoutEffectTypes[1] = [...action.payload.secondType];
            }
        }
    }
});

export const {
    onSetMatchingPokemon,
    onClearMatchingPokemon,
    onAddSelectedType,
    onRemoveSelectedType,
    onRemoveSelectedTypes,
    onRemoveAllInformation,
    onSetActiveType,
    onSetLastSelections,
    onSetSelectedPokemon,
    onRemoveSelectedPokemon,

    onLoadWeaknessToTypes,
    onLoadSuperWeaknessToTypes,
    onLoadResistantToTypes,
    onLoadSuperResistantToTypes,
    onLoadInmuneToTypes,

    onLoadSuperEffectiveTypes,
    onLoadNotVeryEffectiveTypes,
    onLoadWithoutEffectTypes,

} = pokemonSlice.actions;

// export default pokemonSlice.reducer