import DetailsSection from './components/DetailsSection'
import TypesSection from './components/TypesSection'
import TypesSelectionSection from './components/TypesSelectionSection'

import './react-toggle.css'
import Header from './components/Header'

const PokemonStab = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <TypesSection />
        <TypesSelectionSection />
        <DetailsSection />
      </div>
    </>
  )
}

export default PokemonStab
