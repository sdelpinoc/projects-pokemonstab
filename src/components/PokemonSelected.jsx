const PokemonSelected = ({ selectedPokemon }) => {
  return (
    (selectedPokemon && selectedPokemon.name)
      ? <div className="pokedex-box">
          <div className="pokedex-box__bullets">
            <div className="pokedex-box__bullet pokedex-box__bullet-1"></div>
            <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-2"></div>
            <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-3"></div>
            <div className="pokedex-box__bullet pokedex-box__bullet-small pokedex-box__bullet-4"></div>
          </div>
          <img className="pokedex-box__img" src={selectedPokemon.imgUrl} alt={selectedPokemon.name} />
          <dl className="pokedex">
            <dt className="entry">{selectedPokemon.name}</dt>
            {
              (selectedPokemon.ndex || selectedPokemon.form)
                ? <dd>
                  {(selectedPokemon.ndex) && <p>National Pokedex: {selectedPokemon.ndex}</p>}
                  {(selectedPokemon.form) && <p>Form: {selectedPokemon.form}</p>}
                </dd>
                : <></>
            }
          </dl>
        </div>
      : <></>
  )
}

export default PokemonSelected
