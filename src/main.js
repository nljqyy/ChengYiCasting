import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {
  Phone,
  Menu,
  User,
  Medal,
  ArrowRight,
  ArrowLeft,
  Location,
  Message,
  CreditCard,
  Link,
  ChatDotRound,
  Headset,
  Setting
} from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/index.scss'
import { vLazy } from './directives/lazy'

const app = createApp(App)

const icons = {
  Phone,
  Menu,
  User,
  Medal,
  ArrowRight,
  ArrowLeft,
  Location,
  Message,
  CreditCard,
  Link,
  ChatDotRound,
  Headset,
  Setting
}

for (const [key, component] of Object.entries(icons)) {
  app.component(key, component)
}

app.directive('lazy', vLazy)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')