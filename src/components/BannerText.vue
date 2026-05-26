<template>
  <div class="banner-text" :class="positionClass" :style="offsetStyle">
    <div class="banner-overlay" :style="{ background: overlayColor }"></div>
    <div class="banner-content">
      <h1 
        v-if="title" 
        :style="{ 
          fontSize: titleSize, 
          color: titleColor,
          letterSpacing: titleLetterSpacing 
        }"
      >{{ title }}</h1>
      <p 
        v-if="subtitle" 
        :style="{ 
          fontSize: subtitleSize, 
          color: subtitleColor,
          letterSpacing: subtitleLetterSpacing 
        }"
      >{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'center',
    validator: (value) => [
      'center', 'left', 'right',
      'top-left', 'top-center', 'top-right',
      'bottom-left', 'bottom-center', 'bottom-right'
    ].includes(value)
  },
  titleSize: {
    type: String,
    default: '48px'
  },
  subtitleSize: {
    type: String,
    default: '20px'
  },
  titleColor: {
    type: String,
    default: '#ffffff'
  },
  subtitleColor: {
    type: String,
    default: '#ffffff'
  },
  titleLetterSpacing: {
    type: String,
    default: '6px'
  },
  subtitleLetterSpacing: {
    type: String,
    default: '3px'
  },
  overlayColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.45)'
  },
  offsetLeft: {
    type: Number,
    default: 60
  },
  offsetRight: {
    type: Number,
    default: 60
  },
  offsetTop: {
    type: Number,
    default: 60
  },
  offsetBottom: {
    type: Number,
    default: 60
  }
})

const positionClass = computed(() => `position-${props.position}`)

const offsetStyle = computed(() => {
  return {
    '--offset-left': `${props.offsetLeft}px`,
    '--offset-right': `${props.offsetRight}px`,
    '--offset-top': `${props.offsetTop}px`,
    '--offset-bottom': `${props.offsetBottom}px`
  }
})
</script>

<style lang="scss" scoped>
.banner-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;

  &.position-center {
    align-items: center;
    justify-content: center;
  }

  &.position-left {
    align-items: center;
    justify-content: flex-start;
    padding-left: var(--offset-left, 60px);
  }

  &.position-right {
    align-items: center;
    justify-content: flex-end;
    padding-right: var(--offset-right, 60px);
  }

  &.position-top-left {
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: var(--offset-top, 60px);
    padding-left: var(--offset-left, 60px);
  }

  &.position-top-center {
    align-items: flex-start;
    justify-content: center;
    padding-top: var(--offset-top, 60px);
  }

  &.position-top-right {
    align-items: flex-start;
    justify-content: flex-end;
    padding-top: var(--offset-top, 60px);
    padding-right: var(--offset-right, 60px);
  }

  &.position-bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: var(--offset-bottom, 60px);
    padding-left: var(--offset-left, 60px);
  }

  &.position-bottom-center {
    align-items: flex-end;
    justify-content: center;
    padding-bottom: var(--offset-bottom, 60px);
  }

  &.position-bottom-right {
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: var(--offset-bottom, 60px);
    padding-right: var(--offset-right, 60px);
  }

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .banner-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 90%;

    &:not(.position-center) & {
      text-align: left;
    }

    &.position-right & {
      text-align: right;
    }

    h1 {
      font-weight: bold;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
      margin-bottom: 16px;
      line-height: 1.3;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;

      @media (max-width: $breakpoint-md) {
        font-size: 32px !important;
        letter-spacing: 2px !important;
      }
      
      @media (min-width: $breakpoint-lg) and (max-width: 1400px) {
        font-size: calc(var(--title-size, 48px) * 0.85) !important;
        letter-spacing: 4px !important;
      }
    }

    p {
      opacity: 0.95;
      line-height: 1.5;
      word-wrap: break-word;

      @media (max-width: $breakpoint-md) {
        font-size: 16px !important;
        letter-spacing: 1px !important;
      }
    }
  }
}
</style>
