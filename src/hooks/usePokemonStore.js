import { useDispatch, useSelector } from 'react-redux';
import { pokemonApi } from '../apis/pokemonApi';

import { types as typesDB } from '../data/types';
import { onAddSelectedType, onLoadWithoutEffectTypes, onLoadNotVeryEffectiveTypes, onLoadResistantToTypes, onLoadSuperEffectiveTypes, onLoadWeaknessToTypes, onRemoveAllSelectedType, onRemoveSelectedType, onSetActiveType, onSetLastSelections, onSetPokemonInPokedex, onSetPokemonListByType, onLoadInmuneToTypes, onLoadSuperWeaknessToTypes, onLoadSuperResistantToTypes } from '../store/slices/pokemonSlice';

export const usePokemonStore = () => {

    const {
        selectedTypes,
        activeTypes,
        lastSelections,

        weaknessToTypes,
        superWeaknessToTypes,
        resistantToTypes,
        superResistantToTypes,
        inmuneToTypes,

        superEffectiveTypes,
        notVeryEffectiveTypes,
        withoutEffectTypes,

        pokemonListByType,
        pokemonInPokedex
    } = useSelector(state => state.pokemon);

    const dispatch = useDispatch();

    const addSelectedType = type => {
        dispatch(onAddSelectedType(type));
    };

    const removeSelectedType = type => {
        dispatch(onRemoveSelectedType(type));
    };

    const removeAllSelectedType = () => {
        dispatch(onRemoveAllSelectedType());
    };

    const setActiveType = types => {
        console.log('setActiveType - activeTypes: ', activeTypes);
        console.log('setActiveType - types: ', types);
        let isEqualFirstType = false;
        let isEqualSecondType = false;

        // Type1
        if (activeTypes[0]) {
            if (types[0].name === activeTypes[0].name) {
                isEqualFirstType = true;
            };
        }

        // Optional Type2
        if (activeTypes[1] || types[1]) {

            const activeTypeTwo = activeTypes[1] || { name: '' };
            const typeTwo = types[1] || { name: '' };

            if (typeTwo.name === activeTypeTwo.name) {
                isEqualSecondType = true;
            };
        } else {
            isEqualSecondType = true;
        }

        if (!isEqualFirstType || !isEqualSecondType) {
            dispatch(onSetLastSelections());

            console.log('dispatch - onSetActiveType: ', types);
            dispatch(onSetActiveType(types));

            return true;
        }
    };

    const loadDetails = () => {
        // console.log('loadDetails - activeTypesSelected: ', activeTypesSelected);
        if (activeTypes.length === 0) {
            return;
        }

        const activeTypesSelected = activeTypes;

        const weaknessToFirstType = [];
        const resistantToFirstType = [];
        const weaknessToSecondType = [];
        const resistantToSecondType = [];
        const inmuneToFirstType = [];
        const inmuneToSecondType = [];

        // Attacks to the selected Pokemon
        // TODO: Applied posible 2 types
        activeTypesSelected[0].weaknessTo.forEach(element => {
            const weaknessToType = typesDB.filter(type => type.name === element);

            weaknessToFirstType.push(weaknessToType[0]);
        });

        activeTypesSelected[0].resistantTo.forEach(element => {
            const resistantToType = typesDB.filter(type => type.name === element);

            resistantToFirstType.push(resistantToType[0]);
        });

        activeTypesSelected[0].inmuneTo.forEach(element => {
            const inmuneToType = typesDB.filter(type => type.name === element);

            inmuneToFirstType.push(inmuneToType[0]);
        });

        if (activeTypesSelected[1] !== undefined) {
            activeTypesSelected[1].weaknessTo.forEach(element => {
                const weaknessToType = typesDB.filter(type => type.name === element);

                weaknessToSecondType.push(weaknessToType[0]);
            });

            activeTypesSelected[1].resistantTo.forEach(element => {
                const resistantToType = typesDB.filter(type => type.name === element);

                resistantToSecondType.push(resistantToType[0]);
            });

            activeTypesSelected[1].inmuneTo.forEach(element => {
                const inmuneToType = typesDB.filter(type => type.name === element);

                inmuneToSecondType.push(inmuneToType[0]);
            });
        }

        const weaknessOverall = {};
        const resistantOverall = {};
        const inmuneOveral = {};

        // console.log('weaknessToFirstType: ', weaknessToFirstType);
        // Weakness(+1), resistant(-1)
        weaknessToFirstType.forEach(({ name }) => {
            if (!weaknessOverall[name]) {
                weaknessOverall[name] = 1;
            } else {
                weaknessOverall[name] = weaknessOverall[name] + 1;
            }
        });

        resistantToFirstType.forEach(({ name }) => {
            if (!resistantOverall[name]) {
                resistantOverall[name] = 1;
            } else {
                resistantOverall[name] = resistantOverall[name] + 1;
            }
        });

        inmuneToFirstType.forEach(({ name }) => {
            if (!inmuneOveral[name]) {
                inmuneOveral[name] = 1;
            } else {
                inmuneOveral[name] = inmuneOveral[name] + 1;
            }
        });

        if (activeTypesSelected[1] !== undefined) {
            weaknessToSecondType.forEach(({ name }) => {
                if (!weaknessOverall[name]) {
                    weaknessOverall[name] = 1;
                } else {
                    weaknessOverall[name] = weaknessOverall[name] + 1;
                }
            });

            resistantToSecondType.forEach(({ name }) => {
                if (!resistantOverall[name]) {
                    resistantOverall[name] = 1;
                } else {
                    resistantOverall[name] = resistantOverall[name] + 1;
                }
            });

            inmuneToSecondType.forEach(({ name }) => {
                if (!inmuneOveral[name]) {
                    inmuneOveral[name] = 1;
                } else {
                    inmuneOveral[name] = inmuneOveral[name] + 1;
                }
            });
        }

        const weaknessOverallTemp = {...weaknessOverall};

        for (const typeKey in weaknessOverall) {
            if (resistantOverall[typeKey]) {
                weaknessOverall[typeKey] = weaknessOverall[typeKey] - 1;
            }
        }

        for (const typeKey in resistantOverall) {
            if (weaknessOverallTemp[typeKey]) {
                resistantOverall[typeKey] = resistantOverall[typeKey] - 1;
            }
        }

        for (const typeKey in inmuneOveral) {
            if (weaknessOverall[typeKey]) {
                weaknessOverall[typeKey] = 0;
            }

            if (resistantOverall[typeKey]) {
                resistantOverall[typeKey] = 0;
            }
        }

        console.log('weaknessOverall: ', weaknessOverall);
        console.log('resistantOverall: ', resistantOverall);
        console.log('inmuneOveral: ', inmuneOveral);

        const weaknessTo = [];
        const resistantTo = [];
        const supperWeaknessTo = [];
        const supperResistantTo = [];
        const inmuneTo = [];


        for (const typeKey in weaknessOverall) {
            if (weaknessOverall[typeKey] === 2) {
                supperWeaknessTo.push(typesDB.filter(type => type.name === typeKey)[0]);
            } else if (weaknessOverall[typeKey] === 1) {
                weaknessTo.push(typesDB.filter(type => type.name === typeKey)[0]);
            }
        }

        for (const typeKey in resistantOverall) {
            if (resistantOverall[typeKey] === 2) {
                supperResistantTo.push(typesDB.filter(type => type.name === typeKey)[0]);
            } else if (resistantOverall[typeKey] === 1) {
                resistantTo.push(typesDB.filter(type => type.name === typeKey)[0]);
            }
        }

        for (const typeKey in inmuneOveral) {
            inmuneTo.push(typesDB.filter(type => type.name === typeKey)[0]);
        }

        // console.log('weaknessTo: ', weaknessTo);
        // console.log('supperWeaknessTo: ', supperWeaknessTo);

        // Overall load
        dispatch(onLoadWeaknessToTypes(weaknessTo));
        dispatch(onLoadSuperWeaknessToTypes(supperWeaknessTo));
        dispatch(onLoadResistantToTypes(resistantTo));
        dispatch(onLoadSuperResistantToTypes(supperResistantTo));
        dispatch(onLoadInmuneToTypes(inmuneTo));
        
        // FirstType load
        // dispatch(onLoadWeaknessToTypes(weaknessToFirstType));
        // dispatch(onLoadResistantToTypes(resistantToFirstType));
        // dispatch(onLoadInmuneToTypes(inmuneToFirstType));

        // Against other Pokemon
        const superEffectiveFirstType = [];
        const notVeryEffectiveFirstType = [];
        const withoutEffectFirstType = [];

        // TODO: For each selected type(Max 2)
        activeTypesSelected[0].superEffective.forEach(element => {
            const superEffectiveType = typesDB.filter(type => type.name === element);

            superEffectiveFirstType.push(superEffectiveType[0]);
        });

        activeTypesSelected[0].notVeryEffective.forEach(element => {
            const notVeryEffectiveType = typesDB.filter(type => type.name === element);

            notVeryEffectiveFirstType.push(notVeryEffectiveType[0]);
        });

        activeTypesSelected[0].withoutEffect.forEach(element => {
            const withoutEffectType = typesDB.filter(type => type.name === element);

            withoutEffectFirstType.push(withoutEffectType[0]);
        });

        dispatch(onLoadSuperEffectiveTypes({ firstType: superEffectiveFirstType }));
        dispatch(onLoadNotVeryEffectiveTypes({ firstType: notVeryEffectiveFirstType }));
        dispatch(onLoadWithoutEffectTypes({ firstType: withoutEffectFirstType }));

        const superEffectiveSecondtType = [];
        const notVeryEffectiveSecondType = [];
        const withoutEffectSecondType = [];

        // Second type
        if (activeTypesSelected[1] !== undefined) {
            // Attacks against other Pokemon
            activeTypesSelected[1].superEffective.forEach(element => {
                const superEffectiveType = typesDB.filter(type => type.name === element);

                superEffectiveSecondtType.push(superEffectiveType[0]);
            });

            activeTypesSelected[1].notVeryEffective.forEach(element => {
                const notVeryEffectiveType = typesDB.filter(type => type.name === element);

                notVeryEffectiveSecondType.push(notVeryEffectiveType[0]);
            });

            activeTypesSelected[1].withoutEffect.forEach(element => {
                const withoutEffectType = typesDB.filter(type => type.name === element);

                withoutEffectSecondType.push(withoutEffectType[0]);
            });

            dispatch(onLoadSuperEffectiveTypes({ secondType: superEffectiveSecondtType }));
            dispatch(onLoadNotVeryEffectiveTypes({ secondType: notVeryEffectiveSecondType }));
            dispatch(onLoadWithoutEffectTypes({ secondType: withoutEffectSecondType }))
        }
    };

    const getPokemonListByType = async (pokemonTypeSelected = []) => {
        console.log('getPokemon - pokemonTypeSelected: ', pokemonTypeSelected);

        if (pokemonTypeSelected.length === 0) {
            return;
        }

        try {
            const { data } = await pokemonApi.get(`/type/${pokemonTypeSelected[0].name.toLowerCase()}`);
            console.log('getPokemon - data.pokemon: ', data.pokemon);

            // const pokemonLength = data.pokemon.length;

            // const random = getRandomIntInclusive(0, pokemonLength - 1);
            // console.log('random: ', random);
            // console.log('name: ', data.pokemon[random].pokemon.name);

            dispatch(onSetPokemonListByType(data.pokemon));

        } catch (error) {
            console.log('getPokemon - error: ', error);
        }
    };

    const getPokemonInfo = async (pokemonList = '') => {
        console.log('getPokemonInfo - pokemonList: ', pokemonList);

        if (pokemonList.length === 0) {
            return;
        }

        const pokemonLength = pokemonList.length;

        const pokemonRandom = getRandomIntInclusive(0, pokemonLength - 1);
        const nameSelected = pokemonList[pokemonRandom].pokemon.name;

        console.log('pokemonRandom: ', pokemonRandom);
        console.log('name: ', pokemonList[pokemonRandom].pokemon.name);

        let defaultName = nameSelected;

        // Exceptions
        // if (nameSelected === 'meloetta-pirouette') {
        //     nameSelected = 'meloetta-aria';
        // } else if (nameSelected === 'nidoran-f') {
        // } else {
        // if (nameSelected.indexOf('-') !== -1) {
        //     defaultName = nameSelected.substring(0, nameSelected.indexOf('-'));
        // }
        // }

        console.log('defaultName: ', defaultName);

        try {
            const { data } = await pokemonApi.get(`/pokemon/${defaultName.toLowerCase()}`);
            console.log('getPokemonInfo - data', data);

            const { id, name, species, sprites: { other: { 'official-artwork': official_artwork } }, types } = data;
            // console.log('sprites: ', sprites.other['official-artwork'].front_default);
            console.log('official_artwork.front_default ', official_artwork.front_default);

            dispatch(onSetPokemonInPokedex({
                number: id,
                nameRegion: name,
                name: species.name,
                url: species.url,
                img: official_artwork.front_default,
                types: types
            }));

            if (document.querySelector('dt.entry')) {
                const entryPokedex = document.querySelector('dt.entry');
                console.log('Change background-color', types);

                if (types[0] !== undefined && types[1] !== undefined) {
                    entryPokedex.style.setProperty('background', `linear-gradient(90deg, var(--type-${types[0].type.name}-background-color) 31%, var(--type-${types[1].type.name}-background-color) 100%)`);
                    entryPokedex.style.removeProperty('background-color');
                } else {
                    entryPokedex.style.setProperty('background-color', `var(--type-${types[0].type.name}-background-color)`);
                    entryPokedex.style.removeProperty('background');
                }
            }
        } catch (error) {
            console.log('getPokemon - error: ', error);
        }
    };

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    return {
        // Attributes
        selectedTypes,
        activeTypes,
        lastSelections,

        weaknessToTypes,
        superWeaknessToTypes,
        resistantToTypes,
        superResistantToTypes,
        inmuneToTypes,

        superEffectiveTypes,
        notVeryEffectiveTypes,
        withoutEffectTypes,

        pokemonListByType,
        pokemonInPokedex,

        // Methods
        addSelectedType,
        removeSelectedType,
        removeAllSelectedType,
        setActiveType,
        loadDetails,
        getPokemonListByType,
        getPokemonInfo
    };
}