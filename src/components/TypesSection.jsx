import TypesList from './TypesList';

const TypesSection = ({ types, selectedTypes, setActiveType, removeAllSelectedType }) => {

    const onSearchPokemon = () => {
        // console.log('TypesSection - onSearchPokemon');
        if (selectedTypes.length === 0) {
            console.log('Must select at leats 1 type');
            return;
        }

        setActiveType(selectedTypes);
    };

    return (
        <div className="typesSection">
            <h3>Select type:</h3>
            <TypesList types={types} section={'TypesSection'} />
            <h5>Selected types:</h5>
            <TypesList types={selectedTypes} section={'SelectedType'} />
            <div className="actionsButton">
                <button onClick={() => { onSearchPokemon() }}>Search</button>
                <button onClick={() => { removeAllSelectedType() }}>Clear types</button>
            </div>
        </div>
    )
}

export default TypesSection;