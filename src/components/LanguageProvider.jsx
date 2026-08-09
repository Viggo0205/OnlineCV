import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { label, t } from '../data/i18n'

const LanguageContext = createContext(null)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => localStorage.getItem('cv-lang') || 'da')

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'da'
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState((current) => {
      const value = typeof next === 'function' ? next(current) : next
      localStorage.setItem('cv-lang', value)
      return value
    })
  }, [])

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'da' ? 'en' : 'da'))
  }, [setLang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: (value) => t(value, lang),
      label: (key) => label(key, lang),
    }),
    [lang, setLang, toggleLang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
