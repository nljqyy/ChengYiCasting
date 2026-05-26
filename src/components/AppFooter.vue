<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-column">
          <h4>{{ t('footer.about') }}</h4>
          <ul class="footer-links">
            <li><router-link to="/about">{{ t('footer.companyIntro') }}</router-link></li>
            <li><router-link to="/about">{{ t('footer.companyCulture') }}</router-link></li>
            <li><router-link to="/about">{{ t('footer.companyHistory') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>{{ t('footer.products') }}</h4>
          <ul class="footer-links">
            <li><router-link :to="{ path: '/products', query: { category: 'round-cover' } }">{{ t('footer.roundCover') }}</router-link></li>
            <li><router-link :to="{ path: '/products', query: { category: 'square-cover' } }">{{ t('footer.squareCover') }}</router-link></li>
            <li><router-link :to="{ path: '/products', query: { category: 'grating' } }">{{ t('footer.grating') }}</router-link></li>
            <li><router-link :to="{ path: '/products', query: { category: 'custom-casting' } }">{{ t('footer.customCasting') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-column contact-info">
          <h4>{{ t('footer.contact') }}</h4>
          <div class="qr-code">
            <img :src="currentLanguage === 'zh-CN' ? qrCodeCN : qrCodeEN" :alt="t('header.qrCode')" />
          </div>
          <div class="contact-details">
            <p><el-icon><Phone /></el-icon> {{ phone }}</p>
            <p><el-icon><Link /></el-icon> {{ website }}</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <span>{{ t('footer.copyright', { companyName }) }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Phone, Link } from '@element-plus/icons-vue'
import companyConfig from '@/config/company.json'

const { t, locale } = useI18n()
const currentLanguage = computed(() => locale.value)
const companyName = computed(() => {
  return currentLanguage.value === 'zh-CN' 
    ? companyConfig?.companyInfo?.nameCN || '诚毅公司'
    : companyConfig?.companyInfo?.nameEN || 'ChengYi Metal'
})
const phone = companyConfig?.companyInfo?.contactInfo?.phone || '13703301653'
const website = companyConfig?.companyInfo?.contactInfo?.website || 'www.chengyicast.com'
const qrCodeCN = companyConfig?.companyInfo?.contactInfo?.qrCodeCN || '/assets/images/qr-code.svg'
const qrCodeEN = companyConfig?.companyInfo?.contactInfo?.qrCodeEN || '/assets/images/qr-code.svg'
</script>

<style lang="scss" scoped>
.app-footer {
  background: linear-gradient(135deg, #1a2332 0%, #2c3e50 100%);
  color: rgba(255, 255, 255, 0.85);
  padding: 60px 0 24px;
  margin-top: 0;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 40px;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.footer-column {
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 14px;
        transition: all 0.3 ease;
        display: inline-block;

        &:hover {
          color: white;
          transform: translateX(4px);
        }
      }
    }
  }

  &.contact-info {
    .qr-code {
      width: 80px;
      height: 80px;
      background: white;
      border-radius: 4px;
      padding: 6px;
      margin-bottom: 16px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .contact-details {
      p {
        font-size: 14px;
        line-height: 2;
        color: rgba(255, 255, 255, 0.75);

        .el-icon {
          margin-right: 6px;
          color: #c8102e;
          vertical-align: middle;
        }
      }
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  text-align: center;

  .copyright {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .divider {
      opacity: 0.3;
    }
  }
}
</style>
