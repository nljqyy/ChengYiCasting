<template>
  <header class="app-header">
    <!-- 顶部欢迎栏 -->
    <div class="top-bar">
      <div class="container top-content">
        <div class="company-info">
          <span class="welcome-text">{{ t('header.welcome', { companyName }) }}</span>
        </div>
        <div class="contact-info">
          <span class="language-switch" @click="changeLanguage">
            {{ currentLanguage === 'zh-CN' ? t('header.chinese') : t('header.english') }}
          </span>
        </div>
      </div>
    </div>

    <!-- 公司信息栏（第一行） -->
    <div class="company-bar">
      <div class="container company-content">
        <router-link to="/" class="logo-section">
          <img src="/assets/images/logo/chengyizhuzao-logo.webp" alt="Logo" class="logo-img" />
          <div class="company-name-section">
            <h1 class="company-name">{{ companyName }}</h1>
            <p class="company-slogan">{{ t('header.slogan') }}</p>
          </div>
        </router-link>

        <div class="contact-section">
          <div class="qr-code-box">
            <img v-lazy="currentLanguage === 'zh-CN' ? qrCodeCN : qrCodeEN" alt="二维码" class="qr-code-img" />
          </div>
          <div class="phone-box">
            <el-icon :size="20"><Phone /></el-icon>
            <span class="phone-number">{{ phone }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 主导航栏（第二行） -->
    <nav class="main-nav">
      <div class="container nav-content">
        <ul class="nav-menu" :class="{ 'is-active': menuActive }">
          <li v-for="item in navItems" :key="item.path">
            <router-link 
              :to="item.path"
              class="nav-item"
              @click="closeMenu"
            >
              {{ t(item.label) }}
            </router-link>
          </li>
        </ul>

        <button class="menu-toggle" @click="toggleMenu">
          <el-icon :size="24"><Menu /></el-icon>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { Phone, Menu } from '@element-plus/icons-vue'
import companyConfig from '@/config/company.json'

const { t, locale } = useI18n()
const appStore = useAppStore()

const menuActive = ref(false)
const currentLanguage = computed(() => locale.value)
const companyName = computed(() => {
  return currentLanguage.value === 'zh-CN' 
    ? companyConfig?.companyInfo?.nameCN || '诚毅公司'
    : companyConfig?.companyInfo?.nameEN || 'ChengYi Metal'
})
const phone = companyConfig?.companyInfo?.contactInfo?.phone || '13703301653'
const qrCodeCN = companyConfig?.companyInfo?.contactInfo?.qrCodeCN || '/assets/images/qr-code.svg'
const qrCodeEN = companyConfig?.companyInfo?.contactInfo?.qrCodeEN || '/assets/images/qr-code.svg'

const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/products', label: 'nav.products' },
  { path: '/contact', label: 'nav.contact' }
]

function toggleMenu() {
  menuActive.value = !menuActive.value
}

function closeMenu() {
  menuActive.value = false
}

function changeLanguage() {
  const newLang = currentLanguage.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  locale.value = newLang
  appStore.setLanguage(newLang)
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.top-bar {
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  padding: 6px 0;

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #666;

    .welcome-text {
      letter-spacing: 1px;
    }

    .contact-info {
      display: flex;
      align-items: center;
      gap: 12px;

      .language-switch {
        cursor: pointer;
        color: $primary-color;
        font-weight: 500;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

.company-bar {
  background: white;
  padding: 16px 0;
  border-bottom: 1px solid #eee;

  .company-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;

    .logo-img {
      height: 56px;
      width: auto;
    }

    .company-name-section {
      .company-name {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin: 0 0 4px 0;
        letter-spacing: 2px;
      }

      .company-slogan {
        font-size: 13px;
        color: #999;
        margin: 0;
        letter-spacing: 2px;
      }
    }
  }

  .contact-section {
    display: flex;
    align-items: center;
    gap: 20px;

    .qr-code-box {
      width: 80px;
      height: 80px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 6px;
      
      .qr-code-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .phone-box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: linear-gradient(135deg, #c8102e 0%, #a00d25 100%);
      border-radius: 6px;
      color: white;

      .el-icon {
        font-size: 22px;
      }

      .phone-number {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
}

.main-nav {
  background: linear-gradient(135deg, #c8102e 0%, #a00d25 100%);

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 4px;

    .nav-item {
      display: block;
      padding: 16px 32px;
      color: white;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.3s ease;
      background: transparent;
      letter-spacing: 1px;
      
      &:hover,
      &.router-link-active {
        background: rgba(255, 255, 255, 0.2);
        color: white;
      }
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    padding: 8px;
    position: absolute;
    right: 20px;
  }

  @media (max-width: $breakpoint-lg) {
    .menu-toggle {
      display: block;
    }

    .nav-menu {
      position: fixed;
      top: 200px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      transform: translateY(-120%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1001;

      &.is-active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      li {
        width: 100%;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }
      }

      .nav-item {
        color: #333 !important;
        padding: 14px 20px !important;
        
        &:hover,
        &.router-link-active {
          color: $primary-color !important;
          background: rgba(200, 16, 46, 0.05) !important;
        }
      }
    }
  }

  @media (max-width: $breakpoint-md) {
    .company-bar {
      .company-content {
        flex-direction: column;
        gap: 16px;
      }

      .logo-section {
        justify-content: center;
        
        .logo-img {
          height: 48px;
        }

        .company-name-section {
          .company-name {
            font-size: 20px;
          }
        }
      }

      .contact-section {
        .qr-code-box {
          width: 64px;
          height: 64px;
        }

        .phone-box {
          padding: 8px 16px;

          .phone-number {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>