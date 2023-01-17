import { usePokemonStore } from '../hooks/usePokemonStore';
import { useBorderColor } from '../hooks/useBorderColor';

import TypesList from './TypesList';

const WeaknessResistInmuneTo = () => {
    const {
        activeTypes,
        weaknessToTypes,
        superWeaknessToTypes,
        resistantToTypes,
        superResistantToTypes,
        inmuneToTypes
    } = usePokemonStore();

    const [activeTypeFirstName, activeTypeSecondName] = useBorderColor(activeTypes);

    return (
        <div className={`weaknessResistInmuneTo section section-${activeTypeFirstName}-${activeTypeSecondName}`}>
            <h2>
                {
                    (activeTypeFirstName && <span className={`section-${activeTypeFirstName}`}>{activeTypes[0].name}</span>)
                }
                {
                    (activeTypeSecondName && <span className={`section-${activeTypeSecondName}`}>-{activeTypes[1].name}</span>)
                }
                &nbsp;Pokemon are:
            </h2>
            <h5>Super weak to(x4):</h5>
            <TypesList types={superWeaknessToTypes} section={'typesSuperWeaknessTo'} />
            <h5>Weak to(x2):</h5>
            <TypesList types={weaknessToTypes} section={'typesWeaknessTo'} />
            <h5>Resistance to(x0.5):</h5>
            <TypesList types={resistantToTypes} section={'typesResistantTo'} />
            <h5>Super resistance to(x0.25):</h5>
            <TypesList types={superResistantToTypes} section={'typesSuperResistantTo'} />
            <h5>Inmunity to(x0):</h5>
            <TypesList types={inmuneToTypes} section={'typesInmuneTo'} />
        </div>
    )
}

export default WeaknessResistInmuneTo;