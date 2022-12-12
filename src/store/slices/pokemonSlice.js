import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        // Maximum 2 types
        selectedTypes: [],
        // Maximum 2 types
        activeTypes: [],
        // Maximun 3 selection Array<(Array<types>)>
        lastSelections: [],

        weaknessToTypes: [],
        superWeaknessToTypes: [],
        resistantToTypes: [],
        superResistantToTypes: [],
        inmuneToTypes: [],

        // Could be selected 2 types
        superEffectiveTypes: [],
        notVeryEffectiveTypes: [],
        withoutEffectTypes: [],

        pokemonListByType: [],
        pokemonInPokedex: []
    },
    reducers: {
        onAddSelectedType: (state, action) => {
            const exists = state.selectedTypes.some(type => type.name === action.payload.name);

            if (!exists && state.selectedTypes.length < 2) {
                state.selectedTypes.push(action.payload);
            }
        },
        onRemoveSelectedType: (state, action) => {
            state.selectedTypes = state.selectedTypes.filter(type => type.name !== action.payload.name);
        },
        onRemoveAllSelectedType: state => {
            state.selectedTypes = [];
        },
        onSetActiveType: (state, action) => {
            state.activeTypes = [...action.payload];
        },
        onSetLastSelections: (state, action) => {
            // const exists = state.lastSelections.some(selection => { });
            if (state.activeTypes.length !== 0) {
                if (state.lastSelections.length == 3) {
                    state.lastSelections.pop();
                    state.lastSelections.unshift(state.activeTypes);
                } else {
                    state.lastSelections.push(state.activeTypes);
                }
            }
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
        },

        onSetPokemonListByType: (state, action) => {
            state.pokemonListByType = action.payload;
        },
        onSetPokemonInPokedex: (state, action) => {
            state.pokemonInPokedex = action.payload;
        }
    }
});

export const {
    onAddSelectedType,
    onRemoveSelectedType,
    onRemoveAllSelectedType,
    onSetActiveType,
    onSetLastSelections,

    onLoadWeaknessToTypes,
    onLoadSuperWeaknessToTypes,
    onLoadResistantToTypes,
    onLoadSuperResistantToTypes,
    onLoadInmuneToTypes,
    
    onLoadSuperEffectiveTypes,
    onLoadNotVeryEffectiveTypes,
    onLoadWithoutEffectTypes,
    
    // PokemonApi
    onSetPokemonListByType,
    onSetPokemonInPokedex
} = pokemonSlice.actions;

// export default pokemonSlice.reducer