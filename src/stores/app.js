import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const language = ref(localStorage.getItem('language') || 'zh-CN')
  const isLoading = ref(false)
  
  function setLanguage(lang) {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  function setLoading(status) {
    isLoading.value = status
  }

  return {
    language,
    isLoading,
    setLanguage,
    setLoading
  }
})