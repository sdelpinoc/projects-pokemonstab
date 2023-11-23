import { typesTranslation } from '../data/types-translation'
import { usePokemonStore } from '../hooks/usePokemonStore'
import { useSettings } from '../hooks/useSettings'

import TypesList from './TypesList'

const DetailsSection = () => {
  const { language, translationTexts } = useSettings()
  const {
    activeTypes,
    superEffectiveTypes,
    notVeryEffectiveTypes,
    withoutEffectTypes
  } = usePokemonStore()

  return (
    <div className='detailsSection'>
      {activeTypes[0] !== undefined
        ? (
          <div className={`section section-${activeTypes[0].name.toLowerCase()}`}>
            <h2>{typesTranslation[language][activeTypes[0].name] ?? activeTypes[0].name}</h2>
            <h5>{translationTexts['super-effective']}(x2):</h5>
            <TypesList
              types={superEffectiveTypes[0]}
              section={'typesSuperEffective'}
            />
            <h5>{translationTexts['not-very-effective']}(x0.5):</h5>
            <TypesList
              types={notVeryEffectiveTypes[0]}
              section={'typesNotVeryEffective'}
            />
            <h5>{translationTexts['without-effect']}(x0):</h5>
            <TypesList
              types={withoutEffectTypes[0]}
              section={'typesWithoutEffectTo'}
            />
          </div>
          )
        : (
          <>
            <h5>{translationTexts['super-effective']}(x2):</h5>
            <TypesList
              types={superEffectiveTypes[0]}
              section={'typesSuperEffective'}
            />
            <h5>{translationTexts['not-very-effective']}(x0.5):</h5>
            <TypesList
              types={notVeryEffectiveTypes[0]}
              section={'typesNotVeryEffective'}
            />
            <h5>{translationTexts['without-effect']}(x0):</h5>
            <TypesList
              types={withoutEffectTypes[0]}
              section={'typesWithoutEffectTo'}
            />
          </>
          )}
      {activeTypes[1] !== undefined
        ? (
          <div className={`section section-${activeTypes[1].name.toLowerCase()}`}>
            <h2>{typesTranslation[language][activeTypes[1].name] ?? activeTypes[1].name}</h2>
            <h5>{translationTexts['super-effective']}(x2):</h5>
            <TypesList
              types={superEffectiveTypes[1]}
              section={'typesSuperEffective'}
            />
            <h5>{translationTexts['not-very-effective']}(x0.5):</h5>
            <TypesList
              types={notVeryEffectiveTypes[1]}
              section={'typesNotVeryEffective'}
            />
            <h5>{translationTexts['without-effect']}(x0):</h5>
            <TypesList
              types={withoutEffectTypes[1]}
              section={'typesWithoutEffectTo'}
            />
          </div>
          )
        : (
          <></>
          )}
    </div>
  )
}

export default DetailsSection
