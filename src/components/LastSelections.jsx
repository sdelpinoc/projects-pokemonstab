import TypesList from './TypesList';

const LastSelections = ({ lastSelectionsReverse }) => {
    return (
        <>
            <h5>Last selections:</h5>
            <div className="lastSelections" >
                {
                    (lastSelectionsReverse.length > 0)
                        ?
                        lastSelectionsReverse.map((lastSelection, index) => (
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
        </>
    )
}

export default LastSelections;