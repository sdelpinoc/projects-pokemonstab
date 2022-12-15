import { useEffect } from 'react';

import { usePokemonStore } from '../hooks/usePokemonStore';

import TypesList from './TypesList';
import WeaknessResistInmuneTo from './WeaknessResistInmuneTo';
// import LastSelections from './LastSelections';
import PokemonSelected from './PokemonSelected';

const TypesSelectionSection = () => {
    console.log('- - - Render TypesSelectionSection - - -');
    // console.log('TypesSelectionSection - pokemonListByType: ', pokemonListByType);
    // console.log('TypesSelectionSection - pokemonInPokedex: ', pokemonInPokedex);

    const {
        activeTypes, lastSelections, setActiveType, loadDetails, selectedPokemon,
        weaknessToTypes, superWeaknessToTypes, resistantToTypes, superResistantToTypes, inmuneToTypes
    } = usePokemonStore();
    console.log('TypesSelectionSection - activeTypes: ', activeTypes);
    console.log('TypesSelectionSection - lastSelections: ', lastSelections);
    console.log('TypesSelectionSection - selectedPokemon: ', selectedPokemon);

    useEffect(() => {
        // console.log('TypesSelectionSection - useEffect - activeTypes');
        loadDetails();
    }, [activeTypes]);

    // const lastSelectionsShow = [...lastSelections];

    // const lastSelectionsReverse = (lastSelectionsShow) ? lastSelectionsShow.reverse() : [];

    return (
        <div className="typesSelectionSection">
            <h5>Active selection:</h5>
            <TypesList types={activeTypes} section={'activeTypes'} />
            {/* <LastSelections lastSelectionsReverse={lastSelectionsReverse} /> */}
            <PokemonSelected selectedPokemon={selectedPokemon}/>
            <WeaknessResistInmuneTo
                activeTypes={activeTypes}
                weaknessToTypes={weaknessToTypes}
                superWeaknessToTypes={superWeaknessToTypes}
                resistantToTypes={resistantToTypes}
                superResistantToTypes={superResistantToTypes}
                inmuneToTypes={inmuneToTypes} />
        </div>
    )
}

export default TypesSelectionSection;