import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import PokedexBox from './PokedexBox';
import TypesList from './TypesList';
import WeaknessResistInmuneTo from './WeaknessResistInmuneTo';

const TypesSelectionSection = ({ activeTypes, lastSelections, pokemonListByType, pokemonInPokedex, setActiveType, loadDetails, getPokemonListByType, getPokemonInfo }) => {
    console.log('----------Render(TypesSelectionSection)--------------');
    console.log('TypesSelectionSection - activeTypes: ', activeTypes);
    console.log('TypesSelectionSection - pokemonListByType: ', pokemonListByType);
    console.log('TypesSelectionSection - pokemonInPokedex: ', pokemonInPokedex);

    const {
        weaknessToTypes, superWeaknessToTypes, resistantToTypes, superResistantToTypes, inmuneToTypes
    } = useSelector(state => state.pokemon);

    useEffect(() => {
        // console.log('TypesSelectionSection - useEffect - activeTypes');
        loadDetails();

        // getPokemonListByType(activeTypes);

    }, [activeTypes]);

    // useEffect(() => {
    //     console.log('TypesSelectionSection - useEffect - pokemonListByType');

    //     getPokemonInfo(pokemonListByType);

    // }, [pokemonListByType]);

    return (
        <div className="typesSelectionSection">
            {/* <h3>Selection</h3> */}
            <h5>Active selection:</h5>
            <TypesList types={activeTypes} section={'TypesSelectionSection'} />
            {/* <h5>Selected</h5> */}
            <h5>Last selections:</h5>
            <div className="lastSelections" >
                {
                    (lastSelections.length > 0)
                        ?
                        lastSelections.map((lastSelection, index) => (
                            <div
                                key={'lastSelectionContainer-' + index}
                                className="lastSelectionContainer"
                                onClick={() => { setActiveType(lastSelection) }}
                            >
                                <TypesList
                                    key={'lastSelection-' + index}
                                    types={lastSelection}
                                    section={'lastSelection-' + index}
                                />
                            </div>
                        ))
                        : <p>No selections found</p>
                }
            </div>
            {/* <PokedexBox pokemonInPokedex={pokemonInPokedex} /> */}
            <WeaknessResistInmuneTo
                weaknessToTypes={weaknessToTypes}
                superWeaknessToTypes={superWeaknessToTypes}
                resistantToTypes={resistantToTypes}
                superResistantToTypes={superResistantToTypes}
                inmuneToTypes={inmuneToTypes} />
        </div>
    )
}

export default TypesSelectionSection;