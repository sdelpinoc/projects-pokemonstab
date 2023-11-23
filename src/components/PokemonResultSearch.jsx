import { typesTranslation } from '../data/types-translation.js'
import { types as typesDB } from '../data/types.js'

import { usePokemonStore } from '../hooks/usePokemonStore'
import { useSettings } from '../hooks/useSettings.js'
import PokemonImg from './PokemonImg'
import { ShowInfo } from './ShowPokemonInfo.jsx'

const PokemonResultSearch = ({ pokemonSearch, setPokemonSearch }) => {
  const { language, translationTexts } = useSettings()
  const {
    pokemonListTotal, matchingPokemon, selectedPokemon,
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
      <li onClick={handledRemoveList}>{translationTexts['list-text']}</li>
      {
        <li>{translationTexts['show-result']} {matchingPokemon.length} {translationTexts['show-result-union']} {pokemonListTotal}</li>
      }
      {
        matchingPokemon.map(pokemon => (
          <li
            key={`${pokemon.name}${(pokemon.form !== undefined) ? ` - ${pokemon.form}` : ''}`}
            onClick={() => handledSelectPokemon(pokemon)}
          >
            <span className="containerPokemonInfo">
              <PokemonImg {...pokemon} />
              <span>
                <ShowInfo pokemon={pokemon} language={language} />
              </span>
            </span>
            <span className="containerTypes">
              {
                (pokemon.types[0] && <span className="types" style={{ backgroundColor: `var(--type-${pokemon.types[0].toLowerCase()}-background-color)` }}>{typesTranslation[language][pokemon.types[0]] ?? pokemon.types[0]}</span>)
              }
              {
                (pokemon.types[1] && <span className="types" style={{ backgroundColor: `var(--type-${pokemon.types[1].toLowerCase()}-background-color)` }}>{typesTranslation[language][pokemon.types[1]] ?? pokemon.types[1]}</span>)
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
