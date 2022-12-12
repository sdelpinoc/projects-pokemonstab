const PokedexBox = ({ pokemonInPokedex }) => {
    return (
        <div className="pokedex-box">
            <div className="pokedex-box__bullets">
                <div className="pokedex-box__bullet pokedex-box__bullet-1"></div>
                <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-2"></div>
                <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-3"></div>
                <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-4"></div>
            </div>
            {
                (pokemonInPokedex.number !== undefined)
                    ?
                    <>
                        <img className="pokedex-box__img" src={pokemonInPokedex.img} alt="Chikorita" />
                        <dl className="pokedex">
                            <dt className="entry">{pokemonInPokedex.name}</dt>
                            <dd>
                                <p>National: {pokemonInPokedex.number}</p>
                                {/* <p>Jhoto: 001</p> */}
                                {
                                    (pokemonInPokedex.types[0])
                                        ? <p>Type 1: <span className="capitalCase">{pokemonInPokedex.types[0].type.name}</span></p>
                                        : <></>
                                }
                                {
                                    (pokemonInPokedex.types[1])
                                        ? <p>Type 2: <span className="capitalCase">{pokemonInPokedex.types[1].type.name}</span></p> : <></>
                                }
                            </dd>
                        </dl>
                    </>
                    : <p>No pokemon found</p>
            }
        </div>
    )
}

export default PokedexBox;