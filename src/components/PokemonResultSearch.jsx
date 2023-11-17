import { types as typesDB } from '../data/types'

import { usePokemonStore } from '../hooks/usePokemonStore'
import PokemonImg from './PokemonImg'

const PokemonResultSearch = ({ pokemonSearch, setPokemonSearch }) => {
  const {
    matchingPokemon, selectedPokemon,
    setSelectedPokemon, addSelectedType, setActiveType, removeSelectedTypes, clearMatchingPokemon,
    loadingPokemonList
  } = usePokemonStore()

  const handledSelectPokemon = pokemon => {
    removeSelectedTypes()

    const typesSelected = []

    if (pokemon.types[0]) {
      const type = typesDB.filter(type => type.name === pokemon.types[0])
      addSelectedType(type[0])
      typesSelected.push(type[0])
    }

    if (pokemon.types[1]) {
      const type = typesDB.filter(type => type.name === pokemon.types[1])
      addSelectedType(type[0])
      typesSelected.push(type[0])
    }

    if (typesSelected.length > 0) {
      setActiveType(typesSelected)
    }

    setPokemonSearch(pokemon.name)

    setSelectedPokemon(pokemon)
  }

  const handledRemoveList = () => {
    clearMatchingPokemon()
  }

  const pokemonResultSearch = <div className="pokemonResultSearch" style={{ display: (loadingPokemonList) ? 'none' : '' }}>
    <ul>
      <li onClick={handledRemoveList}>Hide list</li>
      {
        matchingPokemon.map(pokemon => (
          <li
            key={`${pokemon.name}${(pokemon.form !== undefined) ? ` - ${pokemon.form}` : ''}`}
            onClick={() => handledSelectPokemon(pokemon)}
          >
            <span className="containerPokemonInfo">
              <PokemonImg {...pokemon} />
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

  return (
    (matchingPokemon.length !== 0 && pokemonSearch !== selectedPokemon.name)
      ? <>
        <div className="pokemonResultSearch" style={{ display: (!loadingPokemonList) ? 'none' : '' }}>
          <ul>
            <li><div className="loader"></div></li>
          </ul>
        </div> {pokemonResultSearch}
      </>
      : <></>
  )
}

export default PokemonResultSearch
