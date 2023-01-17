import { useState } from 'react';

import { types } from '../data/types.js';

import { usePokemonStore } from '../hooks/usePokemonStore';

import TypesList from './TypesList';
import PokemonResultSearch from './PokemonResultSearch';

const TypesSection = () => {
    const {
        selectedTypes,
        setActiveType,
        removeAllInformation,
        getPokemonList
    } = usePokemonStore();

    const [pokemonSearch, setPokemonSearch] = useState('');

    const onSearchInformation = () => {
        if (selectedTypes.length === 0) {
            console.log('Must select at least 1 type');
            return;
        }

        setActiveType(selectedTypes);
    };

    const handledPokemonSearch = ({ target }) => {
        setPokemonSearch(target.value);

        getPokemonList(target.value);
    };

    const handledClearPokemonSearch = () => {
        setPokemonSearch('');
        document.querySelector('.pokemonSearch').focus();
    };

    return (
        <div className="typesSection">
            <h3 aria-label="typesSectionTitle">Search the Pokemon:</h3>
            <div className="containerPokemonSearch">
                <input
                    className="pokemonSearch"
                    name="pokemonSearch"
                    type="text"
                    onChange={handledPokemonSearch}
                    value={pokemonSearch}
                    autoComplete="off"
                    aria-label="pokemonSearch"
                />
                <img src="./img/icons/backspace_x48.png" alt="Remove search text" onClick={handledClearPokemonSearch} />
            </div>
            <PokemonResultSearch
                pokemonSearch={pokemonSearch}
                setPokemonSearch={setPokemonSearch}
            />
            <h3>Or select the types:</h3>
            <TypesList types={types} section={'TypesSection'} />
            <h5>Selected types:</h5>
            <TypesList types={selectedTypes} section={'SelectedType'} />
            <div className="actionsButton">
                <button onClick={() => { onSearchInformation() }} aria-label="search">Search</button>
                <button onClick={() => { removeAllInformation() }} aria-label="clear">Clear</button>
            </div>
        </div>
    )
}

export default TypesSection;