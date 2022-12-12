import TypesList from './TypesList';

const WeaknessResistInmuneTo = ({weaknessToTypes, superWeaknessToTypes, resistantToTypes, superResistantToTypes, inmuneToTypes }) => {
    return (
        <div>
            <h5>Has super weakness to(x4):</h5>
            <TypesList types={superWeaknessToTypes} section={'typesSuperWeaknessTo'} />
            <h5>Has weakness to(x2):</h5>
            <TypesList types={weaknessToTypes} section={'typesWeaknessTo'} />
            <h5>Has resistance to(x0.5):</h5>
            <TypesList types={resistantToTypes} section={'typesResistantTo'} />
            <h5>Has super resistance to(x0.25):</h5>
            <TypesList types={superResistantToTypes} section={'typesSuperResistantTo'} />
            <h5>Has inmunity to(x0):</h5>
            <TypesList types={inmuneToTypes} section={'typesInmuneTo'} />
        </div>
    )
}

export default WeaknessResistInmuneTo;