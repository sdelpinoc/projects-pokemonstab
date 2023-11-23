import { formsTranslations } from '../data/forms-translation'

export const ShowInfo = ({ pokemon, language, onlyForm = false }) => {
  const { name, form, lang } = pokemon

  const paradoxNameDisplay = (lang && <label className="paradox"><br />{lang.es.name}</label>)

  const formDisplay = (form !== undefined) ? `${formsTranslations?.[language]?.[form] ?? form}` : null

  if (onlyForm) return formDisplay

  if (lang) {
    return <>
      {name}
      {paradoxNameDisplay}
      {formDisplay}
    </>
  }

  return `${name} ${formDisplay || ''}`
}
