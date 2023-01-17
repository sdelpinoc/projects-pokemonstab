import { useDispatch, useSelector } from 'react-redux';

import { types as typesDB } from '../data/types';
import { pokemon as pokemonDB } from '../data/pokemon';

import { onAddSelectedType, onLoadWithoutEffectTypes, onLoadNotVeryEffectiveTypes, onLoadResistantToTypes, onLoadSuperEffectiveTypes, onLoadWeaknessToTypes, onRemoveSelectedType, onSetActiveType, onSetLastSelections, onLoadInmuneToTypes, onLoadSuperWeaknessToTypes, onLoadSuperResistantToTypes, onSetMatchingPokemon, onRemoveSelectedTypes, onRemoveAllInformation, onClearMatchingPokemon, onSetSelectedPokemon, onRemoveSelectedPokemon, onSetLoadingPokemonList } from '../store/slices/pokemonSlice';

export const usePokemonStore = () => {

    const {
        matchingPokemon,
        selectedTypes,
        activeTypes,
        lastSelections,
        selectedPokemon,

        weaknessToTypes,
        superWeaknessToTypes,
        resistantToTypes,
        superResistantToTypes,
        inmuneToTypes,

        superEffectiveTypes,
        notVeryEffectiveTypes,
        withoutEffectTypes,

        loadingPokemonList
    } = useSelector(state => state.pokemon);

    const dispatch = useDispatch();

    const addSelectedType = type => {
        dispatch(onAddSelectedType(type));
    };

    const removeSelectedType = type => {
        dispatch(onRemoveSelectedType(type));
    };

    const removeSelectedTypes = () => {
        dispatch(onRemoveSelectedTypes());
    };

    const removeAllInformation = () => {
        dispatch(onRemoveAllInformation());

        document.querySelector('.typesSection').scrollIntoView({
            behavior: 'smooth',
        });
    };

    const setActiveType = (types = []) => {
        removeSelectedPokemon();
        clearMatchingPokemon();

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

        setTimeout(() => {
            document.querySelector('.typesSelectionSection').scrollIntoView({
                behavior: 'smooth',
            });
        }, 200);

        if (!isEqualFirstType || !isEqualSecondType) {
            // dispatch(onSetLastSelections(activeTypes));
            dispatch(onSetActiveType(types));
        }
    };

    const loadDetails = () => {

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

        const weaknessOverallTemp = { ...weaknessOverall };

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

        // Overall load
        dispatch(onLoadWeaknessToTypes(weaknessTo));
        dispatch(onLoadSuperWeaknessToTypes(supperWeaknessTo));
        dispatch(onLoadResistantToTypes(resistantTo));
        dispatch(onLoadSuperResistantToTypes(supperResistantTo));
        dispatch(onLoadInmuneToTypes(inmuneTo));

        // Against other Pokemon
        const superEffectiveFirstType = [];
        const notVeryEffectiveFirstType = [];
        const withoutEffectFirstType = [];

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

    const getPokemonList = async (pokemon = '') => {
        dispatch(onSetLoadingPokemonList(true));
        let matchingPokemon = [];
        let pokemonList = [];

        if (pokemon.length === 0) {
            pokemon = '---';
        }

        const regExp = new RegExp(`^${pokemon.trim()}`, 'gmi');

        matchingPokemon = pokemonDB.filter(({ name, lang }) => {
            const existsName = name.match(regExp);
            let existsNameEs = null;
            if (lang && lang.es) {
                existsNameEs = lang.es.name.match(regExp);
            }

            return (existsName !== null || existsNameEs !== null);
        });

        pokemonList = matchingPokemon.slice(0, 10);

        const pokemonListWithImg = await Promise.all(pokemonList.map(async pokemon => {
            const { ndex, name, forImg } = pokemon;
            const baseUrlImg = './img/pokemon/avatar/';

            const nameForImg = name.replace(' ', '_');

            // ndex
            let imgUrl = baseUrlImg + `70px-${(ndex !== '') ? `${ndex}` : ''}`;
            // name
            imgUrl = imgUrl + `${(nameForImg !== undefined) ? nameForImg : ''}`;
            // form(forImg)
            imgUrl = imgUrl + `${(forImg !== undefined) ? `-${forImg}` : ''}`;
            // extension
            imgUrl += '.png';

            // const checkImg = await checkIfImageExists(imgUrl);

            // if (!checkImg) {
            //     imgUrl = baseUrlImg + 'favicon.ico';
            // }

            return {
                ...pokemon,
                imgUrl
            }
        }));

        dispatch(onSetMatchingPokemon(pokemonListWithImg));

        setTimeout(() => {
            dispatch(onSetLoadingPokemonList(false));
        }, 500);
    };

    const clearMatchingPokemon = () => {
        dispatch(onClearMatchingPokemon());
    };

    const setSelectedPokemon = (selectedPokemon) => {
        dispatch(onSetSelectedPokemon(selectedPokemon));
    };

    const removeSelectedPokemon = () => {
        dispatch(onRemoveSelectedPokemon());
    }

    // const checkIfImageExists = async imgUrl => {
    //     try {
    //         const result = await fetch(imgUrl, { method: 'HEAD' })
    //         console.log('checkIfImageExists - result: ', result);

    //         if (result.ok) {
    //             return true;
    //         }

    //         return false;
    //     } catch (error) {
    //         console.log('checkIfImageExists - error: ', error);
    //     }
    // }

    return {
        // Attributes
        matchingPokemon,
        selectedTypes,
        activeTypes,
        lastSelections,
        selectedPokemon,

        weaknessToTypes,
        superWeaknessToTypes,
        resistantToTypes,
        superResistantToTypes,
        inmuneToTypes,

        superEffectiveTypes,
        notVeryEffectiveTypes,
        withoutEffectTypes,
        
        loadingPokemonList,

        // Methods
        addSelectedType,
        removeAllInformation,
        removeSelectedType,
        removeSelectedTypes,
        setActiveType,
        loadDetails,
        getPokemonList,
        clearMatchingPokemon,
        setSelectedPokemon,
        removeSelectedPokemon
    };
}