<template>
  <div class="home-page">
    <!-- Banner轮播区 -->
    <section class="banner-section">
      <PageBanner :banners="banners" height="650px" />
    </section>

    <!-- 产品分类 -->
    <section class="product-category section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title-en">PRODUCT</h2>
          <h3 class="section-title-cn">{{ t('home.productCategories') }}</h3>
          <p class="section-desc">{{ t('home.productCategoriesDesc') }}</p>
        </div>

        <div class="category-grid">
          <div 
            class="category-card" 
            v-for="(category, index) in productCategories" 
            :key="index"
            @click="goToCategory(category)"
          >
            <div class="category-image">
              <img v-lazy="category.image" :alt="t(category.nameKey)" />
              <div class="category-badge" v-if="category.badge">
                {{ category.badge }}
              </div>
            </div>
            <div class="category-name">
              {{ t(category.nameKey) }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="about-section section">
      <div class="about-bg"></div>
      <div class="container">
        <div class="section-header">
          <h2 class="section-title-en">ABOUT US</h2>
          <h3 class="section-title-cn">{{ t('home.about') }}</h3>
          <p class="section-desc">{{ t('home.aboutDesc') }}</p>
        </div>

        <div class="about-content">
          <div class="about-images">
            <img v-lazy="'/assets/images/about/shengcheng-chejian-jinggai.webp'" :alt="t('home.factoryWorkshop')" class="factory-img-1" />
            <img v-lazy="'/assets/images/about/chejian-liushui.webp'" :alt="t('home.companyIntro')" class="factory-img-2" />
          </div>
          
          <div class="about-info">
            <div class="about-cards">
              <div class="info-card card-blue">
                <div class="card-icon">
                  <el-icon :size="48"><User /></el-icon>
                </div>
                <h4>{{ t('home.teamAdvantage') }}</h4>
              </div>
              <div class="info-card card-red">
                <div class="card-icon">
                  <el-icon :size="48"><Medal /></el-icon>
                </div>
                <h4>{{ t('home.teamHonor') }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="product-showcase section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title-en">PRODUCT</h2>
          <h3 class="section-title-cn">{{ t('home.productShowcase') }}</h3>
          <p class="section-desc">{{ t('home.productShowcaseDesc') }}</p>
        </div>

        <div class="showcase-grid">
          <div 
            class="showcase-item" 
            v-for="(product, index) in showcaseProducts" 
            :key="index"
            @click="goToProductCategory(product)"
          >
            <div class="showcase-image">
              <img v-lazy="product.image" :alt="t(product.nameKey)" />
            </div>
            <div class="showcase-info">
              <span class="product-name">{{ t(product.nameKey) }}</span>
              <el-icon><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { User, Medal, ArrowRight } from '@element-plus/icons-vue'
import { useBanners } from '@/composables/useBanners'
import PageBanner from '@/components/PageBanner.vue'
import { getShowcaseImages } from '@/config/showcase.config'

const { t } = useI18n()
const router = useRouter()
const { banners } = useBanners('home')

function goToCategory(category) {
  router.push({ path: '/products', query: { category: category.id } })
}

function goToProductCategory(product) {
  router.push({ path: '/products', query: { category: product.categoryId } })
}

// 动态生成产品分类（懒加载）
const categoryImageModules = import.meta.glob('/public/assets/images/categories/*.webp', { eager: false })
const categoryImages = ref([])

// 根据文件名获取分类信息
function getCategoryInfo(filename) {
  const lowerName = filename.toLowerCase()
  if (lowerName.includes('yuan')) {
    return { id: 'round-cover', nameKey: 'products.roundCover' }
  } else if (lowerName.includes('fang')) {
    return { id: 'square-cover', nameKey: 'products.squareCover' }
  } else if (lowerName.includes('bizi')) {
    return { id: 'grating', nameKey: 'products.grating' }
  } else if (lowerName.includes('dingzhi')) {
    return { id: 'custom-casting', nameKey: 'products.customCasting' }
  }
  return { id: 'round-cover', nameKey: 'products.roundCover' }
}

// 异步加载分类图片
onMounted(async () => {
  const categories = []
  
  for (const path in categoryImageModules) {
    const filename = path.split('/').pop().replace('.webp', '')
    const { id, nameKey } = getCategoryInfo(filename)
    
    categories.push({
      id,
      nameKey,
      image: `/assets/images/categories/${filename}.webp`,
    })
  }
  
  categoryImages.value = categories
})

const productCategories = computed(() => categoryImages.value)

// 使用配置化的 showcase 图片（直接引用 products 目录，避免重复）
const showcaseProducts = computed(() => getShowcaseImages())
</script>

<style lang="scss" scoped>
.banner-section {

  .banner-slide {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .banner-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
}

.product-category {
  background: #f8f9fa;

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    .section-title-en {
      font-size: 14px;
      color: $primary-color;
      letter-spacing: 4px;
      margin-bottom: 8px;
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

  .category-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .category-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

      .category-image img {
        transform: scale(1.05);
      }
    }
  }

  .category-image {
    position: relative;
    padding-top: 75%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .category-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: $primary-color;
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
  }

  .category-name {
    padding: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: $text-primary;
  }
}

.about-section {
  position: relative;
  background: #f8f9fa;
  padding: 80px 0;

  .about-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/images/background/about-bg.svg') no-repeat center center;
    background-size: cover;
    opacity: 0.05;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    .section-title-en {
      font-size: 14px;
      color: $primary-color;
      letter-spacing: 4px;
      margin-bottom: 8px;
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

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .about-images {
    position: relative;

    .factory-img-1 {
      width: 70%;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .factory-img-2 {
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 50%;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border: 4px solid white;
    }
  }

  .about-info {
    .about-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .info-card {
      padding: 32px;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }

      &.card-blue {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }

      &.card-red {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
      }

      .card-icon {
        margin-bottom: 16px;
      }

      h4 {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}

.product-showcase {
  background: white;

  .section-header {
    text-align: center;
    margin-bottom: 48px;

    .section-title-en {
      font-size: 14px;
      color: $primary-color;
      letter-spacing: 4px;
      margin-bottom: 8px;
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

  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }

  .showcase-item {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);

      .showcase-image img {
        transform: scale(1.05);
      }
    }
  }

  .showcase-image {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    border-radius: 8px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .showcase-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 8px;

    .product-name {
      font-size: 14px;
      color: $text-primary;
    }

    .el-icon {
      color: $primary-color;
    }
  }
}
</style>