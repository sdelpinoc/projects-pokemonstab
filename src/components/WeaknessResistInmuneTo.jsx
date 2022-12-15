import { useEffect } from 'react';

import TypesList from './TypesList';

const WeaknessResistInmuneTo = ({ activeTypes, weaknessToTypes, superWeaknessToTypes, resistantToTypes, superResistantToTypes, inmuneToTypes }) => {

    const activeTypeFirstName = (activeTypes[0]) ? activeTypes[0].name.toLowerCase() : '';
    const activeTypeSecondName = (activeTypes[1]) ? activeTypes[1].name.toLowerCase() : '';

    useEffect(() => {
        const weaknessResistInmuneToSection = document.querySelector('.weaknessResistInmuneTo.section');

        if (activeTypes[0] && activeTypes[1]) {
            weaknessResistInmuneToSection.style.setProperty('border-image', `linear-gradient(to right, var(--type-${activeTypeFirstName}-background-color) 31%, var(--type-${activeTypeSecondName}-background-color) 100%) 1`);
        } else if (activeTypes[0]) {
            weaknessResistInmuneToSection.style.setProperty('border-color', `var(--type-${activeTypeFirstName}-background-color)`);
            weaknessResistInmuneToSection.style.removeProperty('border-image');
        } else {
            weaknessResistInmuneToSection.style.removeProperty('border-image');
            weaknessResistInmuneToSection.style.setProperty('border-color', `var(--pokedex-color-1)`);
        }
    }, [activeTypes]);

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