import { usePokemonStore } from '../hooks/usePokemonStore';

const TypesList = ({ types, section }) => {
    console.log('- - - Render TypesList - - -', section);
    const { addSelectedType, removeSelectedType } = usePokemonStore();

    const typesSection = (section === 'TypesSection' && true);
    const showRemoveSpan = (section === 'SelectedType' && true);

    const onRemoveType = type => {
        // console.log('TypesList - onRemoveType - onClick: ', type);
        removeSelectedType(type);
    };

    const onSelectType = type => {
        if (typesSection) {
            // console.log('TypesList - onSelectType - onClick: ', type);
            addSelectedType(type);
        }
    }

    // if (section === 'TypesSelectionSection') {
    //     console.log('TypesList - types: ', types);
    //     console.log('TypesList - section: ', section);
    //     console.log('TypesList - types.length: ', types.length);
    // }

    return (
        <div className={`typesList ${section}`}>
            {
                ((section === 'typesSuperWeaknessTo') && <img src="./img/pokemon/stadistics/25px-X4.png" />)
            }
            {
                
                ((section === 'typesWeaknessTo') && <img src="./img/pokemon/stadistics/25px-X2.png" />)
            }
            {
                ((section === 'typesResistantTo') && <img src="./img/pokemon/stadistics/25px-1-2.png" />)
            }
            {
                ((section === 'typesSuperResistantTo') && <img src="./img/pokemon/stadistics/25px-1-4.png" />)
            }
            {
                ((section === 'typesInmuneTo') && <img src="./img/pokemon/stadistics/25px-X0.png" />)
            }
            {
                (types !== undefined && types.length > 0)
                    ? types.map((type) => (
                        <span
                            key={type.name + '-' + section}
                            className={`type ${type.className}`}
                            onClick={() => onSelectType(type)}
                        >
                            {type.name}
                            {showRemoveSpan && <span className="removeType" key={type.name + '-remove'} onClick={() => { onRemoveType(type) }}>x</span>}
                        </span>
                    ))
                    : (<p>-</p>)
            }
        </div>
    )
}

export default TypesList;