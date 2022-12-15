import { types as typesDB } from '../data/types';

import { usePokemonStore } from '../hooks/usePokemonStore';

const PokemonResultSearch = ({ matchingPokemon, pokemonSearch, selectedPokemon, setPokemonSearch, setSelectedPokemon }) => {
    console.log('- - PokemonResultSearch - -');
    console.log('PokemonResultSearch - selectedPokemon: ', selectedPokemon);
    const { setActiveType, addSelectedType, removeSelectedTypes, clearMatchingPokemon } = usePokemonStore();

    const handledSelectPokemon = pokemon => {
        removeSelectedTypes();
        console.log('handledSelectPokemon - pokemon: ', pokemon);

        const typesSelected = [];

        if (pokemon.types[0]) {
            const type = typesDB.filter(type => type.name === pokemon.types[0]);
            addSelectedType(type[0]);
            typesSelected.push(type[0]);
        }

        if (pokemon.types[1]) {
            const type = typesDB.filter(type => type.name === pokemon.types[1]);
            addSelectedType(type[0]);
            typesSelected.push(type[0]);
        }

        console.log('handledSelectPokemon - typesSelected: ', typesSelected);

        if (typesSelected.length > 0) {
            setActiveType(typesSelected);
        }

        setPokemonSearch(pokemon.name);

        setSelectedPokemon(pokemon);
    };

    const handledRemoveList = () => {
        clearMatchingPokemon();
    };

    // useEffect(() => {
    //     setActiveType(selectedTypes);
    // }, [selectedTypes]);

    return (
        (matchingPokemon.length !== 0 && pokemonSearch !== selectedPokemon.name)
            ?
            <div className="pokemonResultSearch">
                <ul>
                    <li onClick={handledRemoveList}>Hide list</li>
                    {
                        matchingPokemon.map(pokemon => (
                            <li
                                key={`${pokemon.name}${(pokemon.form !== undefined) ? ` - ${pokemon.form}` : ''}`}
                                onClick={() => handledSelectPokemon(pokemon)}
                            >
                                <span className="containerPokemonInfo">
                                    <img src={pokemon.imgUrl} alt={`${pokemon.name}${(pokemon.form !== undefined) ? ` - ${pokemon.form}` : ''}`} />
                                    <span>
                                        {`${pokemon.name}${(pokemon.form !== undefined) ? ` - ${pokemon.form}` : ''}`}
                                        {(pokemon.lang && <label className="lang"><br />{pokemon.lang.es.name}</label>)}
                                    </span>
                                </span>
                                <span className="containerTypes">
                                    {
                                        (pokemon.types[0] && <span className="types" style={{ backgroundColor: `var(--type-${pokemon.types[0].toLowerCase()}-background-color)` }}>{pokemon.types[0]}</span>)
                                    }
                                    {
                                        (pokemon.types[1] && <span className="types" style={{ backgroundColor: `var(--type-${pokemon.types[1].toLowerCase()}-background-color)` }}>{pokemon.types[1]}</span>)
                                    }
                                </span>
                            </li>
                        ))
                    }
                </ul>

            </div>
            : <></>
    )
}

export default PokemonResultSearch;