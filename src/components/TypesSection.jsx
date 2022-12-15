import { useState, useEffect } from 'react';

import { types } from '../data/types.js';

import { usePokemonStore } from '../hooks/usePokemonStore';

import TypesList from './TypesList';
import PokemonResultSearch from './PokemonResultSearch';

const TypesSection = () => {
    console.log('- - - Render TypesSection - - -');

    const {
        matchingPokemon,
        selectedTypes,
        selectedPokemon,
        setSelectedPokemon,
        setActiveType,
        removeAllInformation,
        getPokemonList
    } = usePokemonStore();
    console.log('TypesSection - selectedTypes[0]: ', selectedTypes[0]);
    console.log('TypesSection - selectedTypes[1]: ', selectedTypes[1]);

    const [pokemonSearch, setPokemonSearch] = useState('');

    const onSearchPokemon = () => {
        // console.log('TypesSection - onSearchPokemon');
        if (selectedTypes.length === 0) {
            console.log('Must select at leats 1 type');
            return;
        }

        setActiveType(selectedTypes);
    };

    const handledPokemonSearch = ({ target }) => {
        setPokemonSearch(target.value);
    };

    const handledClearPokemonSearch = () => {
        setPokemonSearch('');
        document.querySelector('.pokemonSearch').focus();
    };

    useEffect(() => {
        getPokemonList(pokemonSearch);
    }, [pokemonSearch]);

    return (
        <div className="typesSection">
            <h3>Search the Pokemon:</h3>
            <div className="containerPokemonSearch">
                <input className="pokemonSearch" name="pokemonSearch" type="text" onChange={handledPokemonSearch} value={pokemonSearch} autoComplete="off" />
                <img src="/img/icons/backspace_x48.png" alt="Remove search text" onClick={handledClearPokemonSearch} />
            </div>
            {
                <PokemonResultSearch
                    matchingPokemon={matchingPokemon}
                    pokemonSearch={pokemonSearch}
                    setPokemonSearch={setPokemonSearch}
                    selectedPokemon={selectedPokemon}
                    setSelectedPokemon={setSelectedPokemon}
                />
            }
            <h3>Or select the types:</h3>
            <TypesList types={types} section={'TypesSection'} />
            <h5>Selected types:</h5>
            <TypesList types={selectedTypes} section={'SelectedType'} />
            <div className="actionsButton">
                <button onClick={() => { onSearchPokemon() }}>Search</button>
                <button onClick={() => { removeAllInformation() }}>Clear types</button>
            </div>
        </div>
    )
}

export default TypesSection;