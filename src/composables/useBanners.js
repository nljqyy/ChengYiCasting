import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useBanners(pageType) {
  const { t, te, locale } = useI18n()

  const getTranslation = (key) => {
    if (te(key)) {
      const value = t(key)
      return value && value.trim() ? value : ''
    }
    return ''
  }

  const banners = computed(() => {
    const bannerConfigs = getBannerConfigs(pageType, locale.value)

    return bannerConfigs.map((config, index) => ({
      image: config.image,
      title: getTranslation(`banners.${pageType}.title.${index}`),
      subtitle: getTranslation(`banners.${pageType}.subtitle.${index}`),
      position: config.position || 'center',
      titleSize: config.titleSize || '48px',
      subtitleSize: config.subtitleSize || '20px',
      titleColor: config.titleColor || '#ffffff',
      subtitleColor: config.subtitleColor || '#ffffff',
      titleLetterSpacing: config.titleLetterSpacing || '6px',
      subtitleLetterSpacing: config.subtitleLetterSpacing || '3px',
      overlayColor: config.overlayColor || 'rgba(0, 0, 0, 0.45)',
      offsetLeft: config.offsetLeft || 60,
      offsetRight: config.offsetRight || 60,
      offsetTop: config.offsetTop || 60,
      offsetBottom: config.offsetBottom || 60
    }))
  })

  return { banners }
}

function getBannerConfigs(type, currentLocale) {
  const isEN = currentLocale === 'en-US'
  
  switch (type) {
    case 'home':
      return [
        {
          image: '/assets/images/banners/banner1.webp',
          position: 'top-left',
          offsetLeft: isEN ? 120 : 300,
          offsetTop: isEN ? 80 : 40,
          titleSize: isEN ? '56px' : '100px',
          subtitleSize: isEN ? '24px' : '40px',
          titleColor: '#ffffff',
          subtitleColor: '#f0f0f0',
          overlayColor: 'rgba(78, 78, 78, 0.4)',
          titleLetterSpacing: isEN ? '2px' : '6px',
          subtitleLetterSpacing: isEN ? '1px' : '3px',
        },
        {
          image: '/assets/images/banners/banner2.webp',
        }
      ]
    case 'about':
    case 'products':
    case 'contact':
      return [
        { 
          image: '/assets/images/banners/lunbo.webp',
          position: 'top-left',
          offsetLeft: 500,
          offsetTop: 80,
          titleSize: '50px',
          subtitleSize: '20px',
          titleColor: '#ffffff',
          subtitleColor: '#f0f0f0',
            overlayColor: 'rgba(78, 78, 78, 0.4)',
        }
      ]
    default:
      return []
  }
}
