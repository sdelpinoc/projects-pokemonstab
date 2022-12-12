import DetailsSection from './components/DetailsSection';
import TypesSection from './components/TypesSection';
import TypesSelectionSection from './components/TypesSelectionSection';

import { types } from './data/types.js';
import { usePokemonStore } from './hooks/usePokemonStore';

const PokemonStab = () => {
    // console.log('PokemonStab - types: ', types);
    const {
        selectedTypes, activeTypes, lastSelections, pokemonListByType, pokemonInPokedex,
        setActiveType, removeAllSelectedType, loadDetails, getPokemonListByType, getPokemonInfo
    } = usePokemonStore();

    console.log('------------------Render-----------------');
    console.log('TypesSection - activeTypes: ', activeTypes);
    console.log('TypesSection - selectedTypes[0]: ', selectedTypes[0]);

    return (
        <>
            {/* <h1>Pokémon Table</h1> */}
            <div className="container">
                <TypesSection
                    types={types} selectedTypes={selectedTypes}
                    setActiveType={setActiveType} removeAllSelectedType={removeAllSelectedType} />
                <TypesSelectionSection
                    activeTypes={activeTypes} lastSelections={lastSelections} pokemonListByType={pokemonListByType} pokemonInPokedex={pokemonInPokedex}
                    setActiveType={setActiveType} loadDetails={loadDetails} getPokemonListByType={getPokemonListByType} getPokemonInfo={getPokemonInfo} />
                <DetailsSection />
            </div>
        </>
    )
}

export default PokemonStab;