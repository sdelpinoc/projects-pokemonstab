import DetailsSection from './components/DetailsSection';
import TypesSection from './components/TypesSection';
import TypesSelectionSection from './components/TypesSelectionSection';

// import { usePokemonStore } from './hooks/usePokemonStore';

const PokemonStab = () => {
    console.log('- - - Render PokemonStab - - -');
    // const { activeTypes, lastSelections, pokemonListByType, pokemonInPokedex,
    //     setActiveType, removeAllSelectedType, loadDetails, getPokemonListByType, getPokemonInfo
    // } = usePokemonStore();

    // console.log('TypesSection - activeTypes: ', activeTypes);

    return (
        <>
            {/* <h1>Pokémon Table</h1> */}
            <div className="container">
                <TypesSection
                // selectedTypes={selectedTypes}
                // setActiveType={setActiveType}
                // removeAllSelectedType={removeAllSelectedType} 
                />
                <TypesSelectionSection
                    // activeTypes={activeTypes}
                    // lastSelections={lastSelections}
                    // pokemonListByType={pokemonListByType}
                    // pokemonInPokedex={pokemonInPokedex}
                    // setActiveType={setActiveType} loadDetails={loadDetails} getPokemonListByType={getPokemonListByType} getPokemonInfo={getPokemonInfo} 
                />
                <DetailsSection />
            </div>
        </>
    )
}

export default PokemonStab;