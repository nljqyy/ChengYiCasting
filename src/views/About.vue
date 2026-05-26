<template>
  <div class="about-page">
   <PageBanner :banners="banners" height="500px" />
    <section class="company-intro section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text animate__animated animate__fadeInLeft">
            <p>{{ t('about.companyIntro') }}</p>
          </div>
          <div class="intro-image animate__animated animate__fadeInRight">
            <img src="/assets/images/about/changfangtu.webp" :alt="t('home.companyIntro')" />
          </div>
        </div>
      </div>
    </section>

    <section class="mission-vision section">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-item animate__animated animate__zoomIn">
            <h3>{{ t('about.mission') }}</h3>
            <p>{{ t('about.missionDesc') }}</p>
          </div>
          <div class="mv-item animate__animated animate__zoomIn animate__delay-1s">
            <h3>{{ t('about.vision') }}</h3>
            <p>{{ t('about.visionDesc') }}</p>
          </div>
          <div class="mv-item animate__animated animate__zoomIn animate__delay-2s">
            <h3>{{ t('about.values') }}</h3>
            <p>{{ t('about.valuesDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="team-culture section">
      <div class="container">
        <div class="culture-grid">
          <div class="culture-images">
            <img src="/assets/images/about/changfangtu.webp" :alt="t('about.team')" class="culture-img-1" />
            <img src="/assets/images/about/chejian-liushui.webp" :alt="t('about.culture')" class="culture-img-2" />
          </div>
          <div class="culture-info">
            <h2>{{ t('about.teamAdvantage') }}</h2>
            <p>{{ t('about.teamAdvantageDesc') }}</p>
            
            <h2>{{ t('about.teamHonor') }}</h2>
            <p>{{ t('about.teamHonorDesc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import PageBanner from '@/components/PageBanner.vue'
import { useBanners } from '@/composables/useBanners'

const { t } = useI18n()
const { banners } = useBanners('about')
</script>

<style lang="scss" scoped>
.company-intro {
  background: white;
  padding: 80px 0;

  .intro-content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 60px;
    align-items: center;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }

    .intro-text p {
      font-size: 18px;
      line-height: 1.8;
      color: $text-regular;
      text-align: justify;
      text-indent: 2em;
    }

    .intro-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }
  }
}

.mission-vision {
  background: #f8f9fa;
  padding: 80px 0;

  .mv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .mv-item {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    h3 {
      font-size: 24px;
      margin-bottom: 16px;
      color: $primary-color;
    }

    p {
      color: $text-secondary;
      line-height: 1.6;
    }
  }
}

.team-culture {
  background: white;
  padding: 80px 0;

  .culture-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
    align-items: center;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }

    .culture-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;

      .culture-img-1 {
        grid-row: span 2;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .culture-img-2 {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    .culture-info {
      h2 {
        font-size: 28px;
        color: #333;
        margin-bottom: 12px;
        position: relative;
        padding-left: 20px;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 24px;
          background: $primary-color;
          border-radius: 2px;
        }
      }

      p {
        color: $text-secondary;
        line-height: 1.8;
        margin-bottom: 32px;
      }
    }
  }
}
</style>