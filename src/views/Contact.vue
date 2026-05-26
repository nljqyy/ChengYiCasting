<template>
  <div class="contact-page">
    <PageBanner :banners="banners" height="500px" />

    <section class="contact-content section">
      <div class="container">
        <!-- 页面标题 -->
        <div class="section-header">
          <h2 class="section-title-en">CONTACT</h2>
          <h3 class="section-title-cn">{{ t('contact.title') }}</h3>
          <p class="section-desc">{{ t('contact.desc') }}</p>
        </div>

        <!-- 上排：联系信息 + 名片正反面 -->
        <div class="contact-grid">
          <!-- 左侧：联系信息卡片 -->
          <div class="contact-info-card">
            <div class="card-header">
              <div class="header-icon">
                <el-icon :size="32"><Phone /></el-icon>
              </div>
              <h4>{{ t('contact.contactInfo') }}</h4>
            </div>
            
            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">
                  <el-icon :size="20"><Location /></el-icon>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t('contact.address') }}</span>
                  <p>{{ address }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <el-icon :size="20"><Phone /></el-icon>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t('contact.phone') }}</span>
                  <p>{{ companyConfig?.companyInfo?.contactInfo?.phone || '400-XXX-XXXX' }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon whatsapp-icon">
                  <el-icon :size="20"><Message /></el-icon>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t('contact.whatsapp') }}</span>
                  <p>{{ companyConfig?.companyInfo?.contactInfo?.whatsapp || '+86 XXX-XXXX-XXXX' }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <el-icon :size="20"><Message /></el-icon>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ t('contact.email') }}</span>
                  <p>{{ companyConfig?.companyInfo?.contactInfo?.email || 'contact@chengyi.com' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：名片卡片 -->
          <div class="business-card-wrapper">
            <div class="card-header">
              <div class="header-icon card-icon">
                <el-icon :size="32"><CreditCard /></el-icon>
              </div>
              <h4>{{ t('contact.businessCard') }}</h4>
            </div>
            
            <div class="card-container">
              <div class="card-pair">
                <div class="card-item">
                  <img src="/assets/images/contact/mingpian2.webp" :alt="t('contact.businessCardFront')" class="card-image" />
                </div>
                <div class="card-item">
                  <img src="/assets/images/contact/mingpian1.webp" :alt="t('contact.businessCardBack')" class="card-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 下排：地图区域 -->
        <div class="map-section">
          <div class="card-header">
            <div class="header-icon map-icon">
              <el-icon :size="32"><Location /></el-icon>
            </div>
            <h4>{{ t('contact.location') }}</h4>
          </div>
          <div class="map-placeholder">
            <img src="/assets/images/contact/map.webp" :alt="t('contact.map')" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '@/components/PageBanner.vue'
import { Location, Phone, Message, CreditCard } from '@element-plus/icons-vue'
import companyConfig from '@/config/company.json'
import { useBanners } from '@/composables/useBanners'

const { t, locale } = useI18n()
const { banners } = useBanners('contact')

const currentLanguage = computed(() => locale.value)
const address = computed(() => {
  return currentLanguage.value === 'zh-CN' 
    ? companyConfig?.companyInfo?.contactInfo?.addressCN || 'XX省XX市XX区XX路XX号'
    : companyConfig?.companyInfo?.contactInfo?.addressEN || 'Address'
})
</script>

<style lang="scss" scoped>
.contact-content {
  background: #f8fafc;
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;

  &.small {
    margin-bottom: 24px;

    h4 {
      font-size: 20px;
      color: $text-primary;
      margin: 0;
    }
  }

  .section-title-en {
    font-size: 14px;
    color: $primary-color;
    letter-spacing: 4px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .section-title-cn {
    font-size: 32px;
    color: $text-primary;
    margin-bottom: 12px;
  }

  .section-desc {
    color: $text-secondary;
    font-size: 16px;
  }
}

/* 联系网格布局 */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  margin-bottom: 20px;
  grid-auto-rows: minmax(320px, auto);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(280px, auto);
  }
}

/* 联系信息卡片 */
.contact-info-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e2e8f0;

    .header-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    h4 {
      font-size: 20px;
      color: $text-primary;
      margin: 0;
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    background: #f8fafc;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: #eef1f6;
      transform: translateX(4px);
    }

    .info-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $primary-color;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

      &.whatsapp-icon {
        background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        color: white;
      }
    }

    .info-content {
      display: flex;
      flex-direction: column;

      .info-label {
        font-size: 14px;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
      }

      p {
        font-size: 17px;
        color: $text-primary;
        margin: 0;
        line-height: 1.5;
      }
    }
  }
}

/* 名片卡片 */
.business-card-wrapper {
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  min-height: 240px;

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;

    .header-icon {
      &.card-icon {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }
    }

    h4 {
      font-size: 16px;
      color: $text-primary;
      margin: 0;
    }
  }

  .card-container {
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
    padding: 4px;
    background: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
  }

  .card-pair {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: auto;

    .card-item {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      max-width: 100%;

      .card-image {
        width: 100%;
        height: auto;
        object-fit: contain;
        display: block;
        max-height: 280px;
      }
    }
  }
}

/* 地图区域 */
.map-section {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;

    .header-icon {
      &.map-icon {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }
    }

    h4 {
      font-size: 20px;
      color: $text-primary;
      margin: 0;
    }
  }

  .map-placeholder {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    min-height: 120px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

</style>