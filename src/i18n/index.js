import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN.json'
import enUS from './locales/en-US.json'

function detectBrowserLanguage() {
  const savedLanguage = localStorage.getItem('language')
  
  if (savedLanguage) {
    return savedLanguage
  }
  
  const browserLanguage = navigator.language || navigator.userLanguage
  const supportedLanguages = ['zh-CN', 'en-US']
  
  const detectedLang = browserLanguage.toLowerCase()
  
  if (detectedLang.startsWith('zh')) {
    return 'zh-CN'
  } else if (detectedLang.startsWith('en')) {
    return 'en-US'
  } else {
    return 'zh-CN'
  }
}

const defaultLocale = detectBrowserLanguage()

localStorage.setItem('language', defaultLocale)

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n