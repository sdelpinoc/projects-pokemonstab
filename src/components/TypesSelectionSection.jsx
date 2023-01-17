import { useEffect } from 'react';

import { usePokemonStore } from '../hooks/usePokemonStore';

import TypesList from './TypesList';
import WeaknessResistInmuneTo from './WeaknessResistInmuneTo';
// import LastSelections from './LastSelections';
import PokemonSelected from './PokemonSelected';

const TypesSelectionSection = () => {

    const { activeTypes, selectedPokemon, loadDetails } = usePokemonStore(); // lastSelections,
    // console.log('TypesSelectionSection - lastSelections: ', lastSelections);

    useEffect(() => {
        loadDetails();
    }, [activeTypes]);

    // const lastSelectionsShow = [...lastSelections];
    // const lastSelectionsReverse = (lastSelectionsShow) ? lastSelectionsShow.reverse() : [];

    return (
        <div className="typesSelectionSection">
            <h5>Active selection:</h5>
            <TypesList types={activeTypes} section={'activeTypes'} />
            {/* <LastSelections lastSelectionsReverse={lastSelectionsReverse} /> */}
            <PokemonSelected selectedPokemon={selectedPokemon} />
            <WeaknessResistInmuneTo />
        </div>
    )
}

export default TypesSelectionSection;