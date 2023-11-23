import { useState } from 'react'

import { usePokemonStore } from '../hooks/usePokemonStore'

import TypesList from './TypesList'
import PokemonResultSearch from './PokemonResultSearch'
import { types } from '../data/types'
import { useSettings } from '../hooks/useSettings'

const TypesSection = () => {
  const { translationTexts } = useSettings()
  const {
    selectedTypes,
    setActiveType,
    removeAllInformation,
    getPokemonList
  } = usePokemonStore()

  const [pokemonSearch, setPokemonSearch] = useState('')

  const onSearchInformation = () => {
    if (selectedTypes.length === 0) {
      console.log('Must select at least 1 type')
      return
    }

    setActiveType(selectedTypes)
  }

  const handledPokemonSearch = ({ target }) => {
    setPokemonSearch(target.value)

    getPokemonList(target.value)
  }

  const handledClearPokemonSearch = () => {
    setPokemonSearch('')
    document.querySelector('.pokemonSearch').focus()
  }

  return (
    <div className="typesSection">
      <h3 aria-label="typesSectionTitle">{translationTexts['search-text']}:</h3>
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
      <h3>{translationTexts['sub-search-text']}:</h3>
      <TypesList types={types} section={'TypesSection'} />
      <h5>{translationTexts['selected-text']}:</h5>
      <TypesList types={selectedTypes} section={'SelectedType'} />
      <div className="actionsButton">
        <button onClick={() => { onSearchInformation() }} aria-label="search">{translationTexts.buttonSearch}</button>
        <button onClick={() => { removeAllInformation() }} aria-label="clear">{translationTexts.buttonClear}</button>
      </div>
    </div>
  )
}

export default TypesSection
