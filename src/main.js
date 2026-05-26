import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/index.scss'
import { vLazy } from './directives/lazy'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.directive('lazy', vLazy)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')