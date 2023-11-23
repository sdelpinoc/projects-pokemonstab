import Toggle from 'react-toggle'
import { useSettings } from '../hooks/useSettings'

export default function Header () {
  const { isDark, setIsDark, language, setLanguage } = useSettings()

  return <header>
    <Toggle
      checked={language === 'es'}
      onChange={({ target }) => {
        const newLanguage = target.checked ? 'es' : 'en'
        setLanguage(newLanguage)
        window.localStorage.setItem('__language__', newLanguage)
      }}
      icons={{ checked: '🇪🇸', unchecked: '🇺🇸' }}
      aria-label="Language toggle"
    />
    <Toggle
      checked={isDark}
      onChange={({ target }) => {
        window.localStorage.setItem('__dark_mode__', isDark)
        setIsDark(target.checked)
      }}
      icons={{ checked: '🌙', unchecked: '🔆' }}
      aria-label="Dark mode toggle"
    />
  </header>
}
