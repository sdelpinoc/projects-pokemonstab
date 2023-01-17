import { useState } from 'react';

const PokemonImg = ({ imgUrl, name, form }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {(!loaded && <span style={{ height: '70px' }}></span>)}
            <img
                src={imgUrl}
                style={{
                    display: loaded ? '' : 'hidden',
                    width: '70px',
                    height: '70px'
                }}
                alt={`${name}${(form !== undefined) ? ` - ${form}` : ''}`}
                onLoad={() => setLoaded(true)}
            />
        </>
    )
}

export default PokemonImg;