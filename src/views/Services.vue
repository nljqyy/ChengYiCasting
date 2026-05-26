<template>
  <div class="services-page">
    <section class="services-hero section">
      <div class="container">
        <h1 class="section-title animate__animated animate__fadeInUp">{{ t('services.title') }}</h1>
        <p class="section-subtitle animate__animated animate__fadeInUp animate__delay-1s">
          {{ t('services.subtitle') }}
        </p>
      </div>
    </section>

    <section class="services-list section">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index"
               :class="`animate__animated animate__fadeInUp animate__delay-${(index % 3 + 1)}s`">
            <div class="service-icon">
              <el-icon :size="48"><component :is="service.icon" /></el-icon>
            </div>
            <h3>{{ t(service.nameKey) }}</h3>
            <p>{{ t(service.descriptionKey) }}</p>
          </div>
        </div>
        
        <div class="cta-section">
          <el-button type="primary" size="large">
            {{ t('services.contactUs') }}
          </el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ChatDotRound, Headset, Setting } from '@element-plus/icons-vue'

const { t } = useI18n()

const services = [
  { icon: ChatDotRound, nameKey: 'services.service1', descriptionKey: 'services.service1Desc' },
  { icon: Headset, nameKey: 'services.service2', descriptionKey: 'services.service2Desc' },
  { icon: Setting, nameKey: 'services.service3', descriptionKey: 'services.service3Desc' }
]
</script>

<style lang="scss" scoped>
.services-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  .section-title,
  .section-subtitle {
    color: white;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 16px;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
    line-height: 1.6;
  }
}

.cta-section {
  text-align: center;
  padding: 40px 0;
}
</style>