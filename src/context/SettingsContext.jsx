import { createContext, useState } from 'react'

// 1. Create the context(that we will consume later)
export const SettingsContext = createContext()

const DARK_MODE_DEFAULT = false
const LANGUAGE_DEFAULT = 'en'

// 2. Create the provider, which gives us access to the context
export function SettingsProvider ({ children }) {
  // Read from local storage first
  const initialStateDarkMode = (() => {
    const persistedState = window.localStorage.getItem('__dark_mode__')

    if (persistedState) return JSON.parse(persistedState)

    return DARK_MODE_DEFAULT
  })()

  const initialLanguage = (() => {
    const persistedState = window.localStorage.getItem('__language__')
    console.log({ persistedState })
    if (persistedState) return persistedState

    return LANGUAGE_DEFAULT
  })()

  const [isDark, setIsDark] = useState(initialStateDarkMode)
  const [language, setLanguage] = useState(initialLanguage)

  return (
    <SettingsContext.Provider value={{
      isDark,
      setIsDark,
      language,
      setLanguage
    }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
