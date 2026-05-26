<template>
  <div class="products-page">
   <PageBanner :banners="banners" height="500px" />

    <section class="product-categories section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title-en">PRODUCT</h2>
          <h3 class="section-title-cn">{{ t('products.categories') }}</h3>
          <p class="section-desc">{{ t('products.categoriesDesc') }}</p>
        </div>

        <div class="category-grid" v-if="!selectedCategory">
          <div 
            class="category-card"
            v-for="(category, index) in categories"
            :key="index"
            @click="selectCategory(category)"
          >
            <div class="category-image">
              <img :src="category.image" :alt="t(category.nameKey)" />
              <div class="category-badge" v-if="category.badge">
                {{ category.badge }}
              </div>
            </div>
            <div class="category-name">{{ t(category.nameKey) }}</div>
          </div>
        </div>

        <div class="product-list-section" v-else>
          <div class="back-button" @click="goBack">
            <el-icon><ArrowLeft /></el-icon>
            {{ t('products.backToCategories') }}
          </div>

          <h2 class="list-title">{{ t(selectedCategory.nameKey) }}</h2>
          <p class="list-desc">{{ selectedCategory.description }}</p>

          <div class="product-grid">
            <div 
              class="product-item"
              v-for="(product, index) in paginatedProducts"
              :key="index"
            >
              <div class="product-image">
                <img :src="product" :alt="`${t('products.product')}${index + 1}`" />
              </div>
            </div>
          </div>

          <div class="empty-state" v-if="allProducts.length === 0">
            <el-empty :description="t('products.noProducts')" />
          </div>

          <div class="pagination-wrapper" v-if="totalPages > 1">
            <el-pagination
              v-model:current-page="currentPage"
              :page-size="pageSize"
              :total="allProducts.length"
              layout="prev, pager, next, jumper"
              :disabled="allProducts.length === 0"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PageBanner from '@/components/PageBanner.vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useBanners } from '@/composables/useBanners'

const { banners } = useBanners('products')
const route = useRoute()
const { t } = useI18n()

const categories = [
  {
    id: 'round-cover',
    nameKey: 'products.roundCover',
    image: '/assets/images/categories/yuan-fenlei.webp',
    folder: 'round-cover'
  },
  {
    id: 'square-cover',
    nameKey: 'products.squareCover',
    image: '/assets/images/categories/fang-fenlei.webp',
    folder: 'square-cover'
  },
  {
    id: 'grating',
    nameKey: 'products.grating',
    image: '/assets/images/categories/bizi-fenlei.webp',
    folder: 'grating'
  },
  {
    id: 'custom-casting',
    nameKey: 'products.customCasting',
    image: '/assets/images/categories/dingzhi-fenlei.webp',
    folder: 'custom-casting'
  }
]

const selectedCategory = ref(null)
const currentPage = ref(1)
const pageSize = ref(12)

const productImages = import.meta.glob('/public/assets/images/products/*/*.webp', { eager: true })
const productSvgImages = import.meta.glob('/public/assets/images/products/*/*.svg', { eager: true })

const allProductImages = { ...productImages, ...productSvgImages }

onMounted(() => {
  const categoryId = route.query.category
  if (categoryId) {
    const category = categories.find(c => c.id === categoryId)
    if (category) {
      selectCategory(category)
    }
  }
})

watch(() => route.query.category, (newCategoryId) => {
  if (newCategoryId) {
    const category = categories.find(c => c.id === newCategoryId)
    if (category) {
      selectCategory(category)
    }
  } else {
    selectedCategory.value = null
    currentPage.value = 1
  }
})

function selectCategory(category) {
  selectedCategory.value = category
  currentPage.value = 1
}

function goBack() {
  selectedCategory.value = null
  currentPage.value = 1
}

const allProducts = computed(() => {
  if (!selectedCategory.value) return []
  
  const folderPath = `/public/assets/images/products/${selectedCategory.value.folder}/`
  
  return Object.keys(allProductImages)
    .filter(path => path.includes(selectedCategory.value.folder))
    .map(path => {
      const url = path.replace('/public', '')
      return url
    })
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return allProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(allProducts.value.length / pageSize.value)
})
</script>

<style lang="scss" scoped>
.product-categories {
  background: white;
  padding: 80px 0;
  min-height: calc(100vh - 400px);
}

.section-header {
  text-align: center;
  margin-bottom: 48px;

  .section-title-en {
    font-size: 32px;
    color: #999;
    font-weight: 300;
    letter-spacing: 8px;
    margin-bottom: 8px;
  }

  .section-title-cn {
    font-size: 36px;
    color: #333;
    font-weight: bold;
    margin-bottom: 12px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: $primary-color;
    }
  }

  .section-desc {
    font-size: 16px;
    color: #666;
    margin-top: 20px;
  }
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 0 20px;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .category-card {
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 280px;

    &:hover {
      transform: translateY(-8px);

      .category-image img {
        transform: scale(1.05);
      }
    }

    .category-image {
      position: relative;
      width: 100%;
      height: 280px;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #f8f8f8;
        transition: transform 0.3s ease;
      }

      .category-badge {
        position: absolute;
        top: 16px;
        left: 0;
        background: $primary-color;
        color: white;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
      }
    }

    .category-name {
      background: $primary-color;
      color: white;
      text-align: center;
      padding: 14px;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.product-list-section {
  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: $primary-color;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 32px;
    padding: 10px 20px;
    border: 2px solid $primary-color;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      background: $primary-color;
      color: white;
    }

    .el-icon {
      font-size: 18px;
    }
  }

  .list-title {
    font-size: 32px;
    color: #333;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .list-desc {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .product-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

        .product-image img {
          transform: scale(1.08);
        }
      }

      .product-image {
        position: relative;
        width: 100%;
        padding-top: 100%;
        overflow: hidden;
        background: #f5f5f5;

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
    }
  }

  .empty-state {
    text-align: center;
    padding: 80px 20px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-top: 40px;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    padding-bottom: 20px;

    :deep(.el-pagination) {
      .el-pager li {
        margin: 0 4px;
      }

      .el-pager li.is-active {
        background: $primary-color;
        color: white;
      }

      button:disabled {
        opacity: 0.5;
      }
    }
  }
}</style>