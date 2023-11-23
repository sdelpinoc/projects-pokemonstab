import { typesTranslation } from '../data/types-translation'
import { usePokemonStore } from '../hooks/usePokemonStore'
import { useSettings } from '../hooks/useSettings'

const TypesList = ({ types, section }) => {
  const { language } = useSettings()
  const { addSelectedType, removeSelectedType } = usePokemonStore()
  // console.log(language)
  // console.log(typesTranslation[language])
  // console.log(typesTranslation.language.Normal ?? '-')

  const typesSection = (section === 'TypesSection' && true)
  const showRemoveSpan = (section === 'SelectedType' && true)

  const handleRemoveType = type => {
    removeSelectedType(type)
  }

  const handleSelectType = type => {
    if (typesSection) {
      addSelectedType(type)
    }
  }

  return (
    <div className={`typesList ${section}`}>
      {
        ((section === 'typesSuperWeaknessTo') && <img src="./img/pokemon/statistics/25px-X4.png" />)
      }
      {
        ((section === 'typesWeaknessTo') && <img src="./img/pokemon/statistics/25px-X2.png" />)
      }
      {
        ((section === 'typesResistantTo') && <img src="./img/pokemon/statistics/25px-1-2.png" />)
      }
      {
        ((section === 'typesSuperResistantTo') && <img src="./img/pokemon/statistics/25px-1-4.png" />)
      }
      {
        ((section === 'typesImmuneTo') && <img src="./img/pokemon/statistics/25px-X0.png" />)
      }
      {
        (types !== undefined && types.length > 0)
          ? types.map((type) => {
            const { name, className } = type

            return <span
              key={name + '-' + section}
              className={`type ${className}`}
              onClick={() => handleSelectType(type)}
              aria-label="TypesListType"
            >
              {typesTranslation[language][name] ?? name}
              {showRemoveSpan && <span className="removeType" key={name + '-remove'} onClick={() => { handleRemoveType(type) }}>x</span>}
            </span>
          })
          : (<p>-</p>)
      }
    </div>
  )
}

export default TypesList
