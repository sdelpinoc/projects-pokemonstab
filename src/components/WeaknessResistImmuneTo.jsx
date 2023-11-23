import { usePokemonStore } from '../hooks/usePokemonStore'
import { useBorderColor } from '../hooks/useBorderColor'

import TypesList from './TypesList'
import { useSettings } from '../hooks/useSettings'
import { typesTranslation } from '../data/types-translation'

const WeaknessResistImmuneTo = () => {
  const { language, translationTexts } = useSettings()
  const {
    activeTypes,
    weaknessToTypes,
    superWeaknessToTypes,
    resistantToTypes,
    superResistantToTypes,
    ImmuneToTypes
  } = usePokemonStore()

  const [activeTypeFirstName, activeTypeSecondName] = useBorderColor(activeTypes)

  return (
    <div className={`weaknessResistImmuneTo section section-${activeTypeFirstName}-${activeTypeSecondName}`}>
      <h2>
        {
          (activeTypeFirstName && <span className={`section-${activeTypeFirstName}`}>{typesTranslation?.[language]?.[activeTypes[0].name] ?? activeTypes[0].name}</span>)
        }
        {
          (activeTypeSecondName && <span className={`section-${activeTypeSecondName}`}>-{typesTranslation?.[language]?.[activeTypes[1].name] ?? activeTypes[1].name}</span>)
        }
      </h2>
      <h5>{translationTexts['super-weak']}(x4):</h5>
      <TypesList types={superWeaknessToTypes} section={'typesSuperWeaknessTo'} />
      <h5>{translationTexts.weak}(x2):</h5>
      <TypesList types={weaknessToTypes} section={'typesWeaknessTo'} />
      <h5>{translationTexts.resistance}(x0.5):</h5>
      <TypesList types={resistantToTypes} section={'typesResistantTo'} />
      <h5>{translationTexts['super-resistance']}(x0.25):</h5>
      <TypesList types={superResistantToTypes} section={'typesSuperResistantTo'} />
      <h5>{translationTexts.immunity}(x0):</h5>
      <TypesList types={ImmuneToTypes} section={'typesImmuneTo'} />
    </div>
  )
}

export default WeaknessResistImmuneTo
