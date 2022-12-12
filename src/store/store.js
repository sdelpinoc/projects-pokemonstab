import { configureStore } from '@reduxjs/toolkit';

import { pokemonSlice } from './slices/pokemonSlice';
import { pokemonApi } from './apis/pokemonApi';

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(pokemonApi.middleware)
});