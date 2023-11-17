import { useEffect } from 'react'

import { usePokemonStore } from '../hooks/usePokemonStore'

import TypesList from './TypesList'
import WeaknessResistImmuneTo from './WeaknessResistImmuneTo'
import PokemonSelected from './PokemonSelected'

const TypesSelectionSection = () => {
  const { activeTypes, selectedPokemon, loadDetails } = usePokemonStore() // lastSelections,
  useEffect(() => {
    loadDetails()
  }, [activeTypes])

  return (
    <div className="typesSelectionSection">
      <h5>Active selection:</h5>
      <TypesList types={activeTypes} section={'activeTypes'} />
      {/* <LastSelections lastSelectionsReverse={lastSelectionsReverse} /> */}
      <PokemonSelected selectedPokemon={selectedPokemon} />
      <WeaknessResistImmuneTo />
    </div>
  )
}

export default TypesSelectionSection
