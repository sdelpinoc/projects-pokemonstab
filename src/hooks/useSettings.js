import { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import { translation } from '../data/translation'

export const useSettings = () => {
  const { isDark, setIsDark, language, setLanguage } = useContext(SettingsContext)
  // console.log({ language })

  const translationTexts = translation[language] ?? translation.en

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    window.localStorage.setItem('__dark_mode__', isDark)
  }, [isDark])

  return {
    isDark,
    setIsDark,
    language,
    setLanguage,
    translationTexts
  }
}
