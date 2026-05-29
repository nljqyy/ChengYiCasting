<template>
  <div id="app">
    <!-- Loading 骨架屏 -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-spinner"></div>
      <p class="loading-text">{{ t('app.loading') }}</p>
    </div>
    
    <template v-else>
      <AppHeader />
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <AppFooter />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import companyConfig from '@/config/company.json'

const isLoading = ref(true)
const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()

const currentLanguage = locale

const companyName = () => {
  return currentLanguage.value === 'zh-CN' 
    ? companyConfig?.companyInfo?.nameCN || '诚毅公司'
    : companyConfig?.companyInfo?.nameEN || 'ChengYi Metal'
}

function setPageTitle() {
  const titleKey = route.meta.titleKey
  const pageTitle = titleKey ? t(titleKey) : ''
  document.title = `${pageTitle}${pageTitle ? ' - ' : ''}${companyName()}`
}

onMounted(() => {
  isLoading.value = false
  
  setPageTitle()
  router.afterEach(() => {
    setPageTitle()
  })
})

watch(currentLanguage, () => {
  setPageTitle()
})
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
}

.main-content {
  padding-top: 80px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading 骨架屏样式 */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  z-index: 9999;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 16px;
  font-size: 14px;
  color: #64748b;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>