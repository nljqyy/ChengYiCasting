import { useIntersectionObserver } from '@vueuse/core'

export const vLazy = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          el.classList.add('loaded')
          stop()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )
    
    if (binding.value) {
      el.dataset.src = binding.value
    }
  }
}
