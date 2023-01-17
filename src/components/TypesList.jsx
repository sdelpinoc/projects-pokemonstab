import { usePokemonStore } from '../hooks/usePokemonStore';

const TypesList = ({ types, section }) => {
    const { addSelectedType, removeSelectedType } = usePokemonStore();

    const typesSection = (section === 'TypesSection' && true);
    const showRemoveSpan = (section === 'SelectedType' && true);

    const handleRemoveType = type => {
        removeSelectedType(type);
    };

    const handleSelectType = type => {
        if (typesSection) {
            addSelectedType(type);
        }
    };

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
                            onClick={() => handleSelectType(type)}
                            aria-label="TypesListType"
                        >
                            {type.name}
                            {showRemoveSpan && <span className="removeType" key={type.name + '-remove'} onClick={() => { handleRemoveType(type) }}>x</span>}
                        </span>
                    ))
                    : (<p>-</p>)
            }
        </div>
    )
}

export default TypesList;