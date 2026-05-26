<template>
  <div class="page-banner">
    <el-carousel :interval="5000" :height="height" :autoplay="true" indicator-position="outside">
      <el-carousel-item v-for="(banner, index) in banners" :key="index">
        <div 
          class="banner-slide" 
          :style="{ backgroundImage: `url(${banner.image})` }"
        >
          <BannerText 
            :title="banner.title" 
            :subtitle="banner.subtitle" 
            :position="banner.position"
            :titleSize="banner.titleSize"
            :subtitleSize="banner.subtitleSize"
            :titleColor="banner.titleColor"
            :subtitleColor="banner.subtitleColor"
            :titleLetterSpacing="banner.titleLetterSpacing"
            :subtitleLetterSpacing="banner.subtitleLetterSpacing"
            :overlayColor="banner.overlayColor"
            :offsetLeft="banner.offsetLeft"
            :offsetRight="banner.offsetRight"
            :offsetTop="banner.offsetTop"
            :offsetBottom="banner.offsetBottom"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import BannerText from './BannerText.vue'

defineProps({
  banners: {
    type: Array,
    required: true,
    default: () => []
  },
  height: {
    type: String,
    default: '400px'
  }
})
</script>

<style lang="scss" scoped>
.page-banner {
  margin-top: 122px;

  .banner-slide {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
  }
}
</style>
