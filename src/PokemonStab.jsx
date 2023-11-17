import DetailsSection from './components/DetailsSection'
import TypesSection from './components/TypesSection'
import TypesSelectionSection from './components/TypesSelectionSection'

const PokemonStab = () => {
  return (
    <div className='container'>
      <TypesSection />
      <TypesSelectionSection />
      <DetailsSection />
    </div>
  )
}

export default PokemonStab
