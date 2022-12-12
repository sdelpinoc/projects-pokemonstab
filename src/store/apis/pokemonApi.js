import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2'
    }),
    endpoints: builder => ({
        getPokemonByType: builder.query({
            query: type => `/type/${type}`
        }),
        getPokemonByName: builder.query({
            query: name => `/pokemon/${name}`
        })
    })
})

export const { useGetPokemonByTypeQuery, useGetPokemonByNameQuery } = pokemonApi;