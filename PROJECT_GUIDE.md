# 诚毅公司官网 - 使用指南

## 📋 项目概述

这是一个基于 **Vue3 + Vite** 构建的专业企业官网项目，采用现代化技术栈，具备完整的国际化支持、响应式设计和丰富的动画效果。

### 🎯 核心特性

- ✅ **响应式设计** - 完美适配桌面、平板、移动端
- ✅ **中英文双语** - 一键切换，本地存储记忆
- ✅ **动画效果** - 页面切换、元素入场等丰富动效
- ✅ **SEO优化** - 动态标题、Meta标签
- ✅ **模块化架构** - 组件化开发，易于维护和扩展

---

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录

---

## 📁 资源管理（重要！）

所有静态资源都存放在 `public/assets/` 目录下，按类型分类存放：

```
public/assets/
├── images/                    # 图片资源
│   ├── banner/               # Banner轮播图 (3-5张)
│   │   ├── banner1.jpg       # 首屏轮播图1
│   │   ├── banner2.jpg       # 首屏轮播图2
│   │   └── banner3.jpg       # 首屏轮播图3
│   ├── logo/                 # Logo文件
│   │   ├── logo.png          # 主Logo
│   │   └── logo-white.png    # 白色Logo（深色背景用）
│   ├── about/                # 关于我们页面图片
│   │   ├── company-building.jpg  # 公司大楼
│   │   ├── team.jpg              # 团队照片
│   │   └── culture.jpg           # 企业文化
│   ├── products/             # 产品图片
│   │   ├── product1/         # 产品1文件夹
│   │   │   ├── main.jpg      # 产品主图
│   │   │   └── detail1.jpg   # 详情图
│   │   ├── product2/
│   │   └── product3/
│   ├── services/             # 服务相关图片
│   ├── news/                 # 新闻配图
│   ├── partners/             # 合作伙伴Logo
│   └── background/           # 背景图片
├── videos/                   # 视频资源
│   ├── company-intro.mp4     # 公司介绍视频
│   └── product-demo.mp4      # 产品演示视频
└── documents/                # 文档资料
    ├── company-profile.pdf   # 公司简介
    └── certificates/         # 认证证书
```

### 🎨 图片规格建议

| 类型 | 推荐尺寸 | 格式 | 文件大小 |
|------|---------|------|---------|
| Banner轮播图 | 1920 x 600 px | JPG/WebP | < 500KB |
| Logo | 200 x 60 px | PNG透明背景 | < 100KB |
| 产品主图 | 800 x 800 px | JPG/PNG | < 300KB |
| 团队照片 | 400 x 500 px | JPG | < 500KB |
| 新闻配图 | 1200 x 675 px | JPG | < 400KB |

### 🔄 替换资源方法

**示例：更换Banner图片**

1. 准备新的Banner图片，命名为 `banner1.jpg`
2. 将其放入 `public/assets/images/banner/` 目录
3. 替换原有的 `banner1.jpg`
4. 刷新页面即可看到新图片

> 💡 **提示**: 保持文件名不变，直接替换文件是最简单的方法！

---

## ⚙️ 配置公司信息

### 方法一：修改JSON配置文件（推荐）

编辑 `src/config/company.json`：

```json
{
  "companyInfo": {
    "nameCN": "诚毅公司",                    // 中文名称
    "nameEN": "ChengYi Company",            // 英文名称
    "sloganCN": "专业 · 创新 · 卓越",        // 中文标语
    "sloganEN": "Professional · Innovation · Excellence",
    
    "contactInfo": {
      "addressCN": "XX省XX市XX区XX路XX号",   // 中文地址
      "addressEN": "XX Road, XX District...",// 英文地址
      "phone": "400-XXX-XXXX",              // 电话
      "email": "contact@chengyi.com"        // 邮箱
    }
  }
}
```

修改后重启开发服务器生效。

### 方法二：修改国际化语言包

#### 中文配置：`src/i18n/locales/zh-CN.json`

```json
{
  "nav": {
    "logo": "诚毅公司"          // 导航栏显示的公司名
  },
  "contact": {
    "address": "地址：XX省XX市...",
    "phone": "电话：400-XXX-XXXX",
    "email": "邮箱：contact@chengyi.com"
  }
}
```

#### 英文配置：`src/i18n/locales/en-US.json`

```json
{
  "nav": {
    "logo": "ChengYi Company"
  },
  "contact": {
    "address": "Address: XX Road, ...",
    "phone": "Phone: 400-XXX-XXXX",
    "email": "Email: contact@chengyi.com"
  }
}
```

---

## 🌐 国际化配置

### 添加新语言支持

1. 在 `src/i18n/locales/` 下新建语言文件，如 `ja-JP.json`
2. 编辑 `src/i18n/index.js`：

```javascript
import jaJP from './locales/ja-JP.json'

const i18n = createI18n({
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ja-JP': jaJP  // 新增日语
  }
})
```

3. 在组件中添加语言选项

### 修改翻译文本

找到对应的JSON文件，修改value值即可：

```json
{
  "home": {
    "feature1Title": "专业技术"  // ← 修改这里
  }
}
```

---

## 🎨 样式定制

### 全局样式变量

编辑 `src/styles/variables.scss`：

```scss
$primary-color: #409EFF;     // 主题色
$text-primary: #303133;      // 主文字颜色
$breakpoint-lg: 1200px;      // 响应式断点
```

修改后会自动应用到全局。

### 页面特定样式

每个Vue文件的 `<style scoped>` 中可以单独调整：

```vue
<style lang="scss" scoped>
.banner-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
```

---

## 📝 页面结构说明

### 首页 (`src/views/Home.vue`)

包含以下区块：
1. **Banner轮播** - 3张全屏轮播图，自动播放
2. **公司简介** - 左图右文布局 + 数据统计
3. **产品展示** - 4列产品卡片网格
4. **核心优势** - 4个优势特性展示
5. **服务支持** - 左文右图服务列表
6. **新闻动态** - 3条新闻卡片
7. **合作伙伴** - Logo墙展示
8. **联系CTA** - 行动召唤区域

### 其他页面

- `/about` - 关于我们（发展历程、团队、文化）
- `/products` - 产品中心（产品列表）
- `/services` - 服务支持（服务流程）
- `/contact` - 联系我们（表单 + 地图）

---

## 🔧 常见操作

### 添加新页面

1. 创建页面组件 `src/views/NewPage.vue`
2. 在 `src/router/index.js` 添加路由：

```javascript
{
  path: '/new-page',
  name: 'NewPage',
  component: () => import('@/views/NewPage.vue'),
  meta: { title: '新页面' }
}
```

3. 在导航栏添加入口（`AppHeader.vue`）

### 修改导航菜单

编辑 `src/components/AppHeader.vue`：

```javascript
const navItems = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  // 添加新菜单项...
]
```

### 修改页脚信息

编辑 `src/components/AppFooter.vue`，调整链接和内容。

---

## 📦 技术栈详情

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.4.x | 前端框架 |
| Vite | 5.2.x | 构建工具 |
| Vue Router | 4.3.x | 路由管理 |
| Pinia | 2.1.x | 状态管理 |
| Element Plus | 2.6.x | UI组件库 |
| vue-i18n | 9.13.x | 国际化 |
| Animate.css | 4.1.x | CSS动画库 |
| SCSS | 1.72.x | CSS预处理器 |

---

## 🐛 问题排查

### 样式不生效？

1. 确认SCSS变量是否正确引入
2. 检查浏览器开发者工具是否有编译错误
3. 重启开发服务器

### 图片无法显示？

1. 确认图片路径是否以 `/assets/` 开头
2. 检查文件是否存在且命名正确
3. 清除浏览器缓存刷新

### 国际化文本未更新？

1. 确认JSON文件语法正确（注意逗号）
2. 重启开发服务器
3. 清除localStorage：`localStorage.clear()`

---

## 📞 技术支持

如有问题，请检查：
1. Node.js版本 >= 16.0.0
2. npm版本 >= 8.0.0
3. 依赖是否完全安装

---

## 📄 许可证

本项目仅供学习和商业使用。

---

**最后更新**: 2024年1月