# 资源文件使用说明

## 📁 目录结构说明

```
public/
├── assets/                    # 静态资源根目录
│   ├── images/               # 图片资源
│   │   ├── banner/           # 轮播图/Banner图片
│   │   │   ├── banner1.jpg
│   │   │   ├── banner2.jpg
│   │   │   └── banner3.jpg
│   │   ├── logo/             # 公司Logo
│   │   │   ├── logo.png      # 主Logo（建议尺寸: 200x60px）
│   │   │   ├── logo-white.png # 白色版本Logo（用于深色背景）
│   │   │   └── favicon.ico   # 网站图标
│   │   ├── about/            # 关于我们页面图片
│   │   │   ├── company-building.jpg  # 公司大楼
│   │   │   ├── team.jpg              # 团队照片
│   │   │   └── culture.jpg           # 企业文化
│   │   ├── products/         # 产品图片
│   │   │   ├── product1/
│   │   │   │   ├── main.jpg        # 产品主图
│   │   │   │   ├── detail1.jpg     # 详情图1
│   │   │   │   └── detail2.jpg     # 详情图2
│   │   │   ├── product2/
│   │   │   └── product3/
│   │   ├── services/         # 服务相关图片
│   │   │   ├── service1.jpg
│   │   │   ├── service2.jpg
│   │   │   └── service3.jpg
│   │   ├── team/             # 团队成员照片
│   │   │   ├── member1.jpg
│   │   │   └── member2.jpg
│   │   ├── partners/         # 合作伙伴Logo
│   │   │   ├── partner1.png
│   │   │   └── partner2.png
│   │   ├── news/             # 新闻资讯配图
│   │   │   └── news1.jpg
│   │   └── background/       # 背景图片
│   │       ├── hero-bg.jpg
│   │       └── section-bg.jpg
│   │
│   ├── videos/               # 视频资源
│   │   ├── company-intro.mp4  # 公司介绍视频
│   │   ├── product-demo.mp4   # 产品演示视频
│   │   └── factory-tour.mp4   # 工厂参观视频
│   │
│   ├── icons/                # 图标文件
│   │   ├── feature-icons/     # 功能特性图标
│   │   └── social-icons/      # 社交媒体图标
│   │
│   └── documents/            # 文档资料
│       ├── company-profile.pdf   # 公司简介PDF
│       ├── product-catalog.pdf   # 产品手册
│       └── certificates/         # 认证证书
│           ├── iso9001.pdf
│           └── patent.pdf
```

## 🎨 图片规格建议

### Banner轮播图
- **推荐尺寸**: 1920 x 600 px
- **格式**: JPG/PNG/WebP
- **文件大小**: < 500KB（压缩后）
- **数量**: 建议3-5张

### Logo
- **主Logo**: 200 x 60 px (PNG透明背景)
- **白色Logo**: 同上，用于深色背景
- **Favicon**: 32 x 32 px 或 64 x 64 px (ICO/PNG)

### 产品图片
- **主图**: 800 x 800 px (正方形)
- **详情图**: 1200 x 800 px (横版)
- **缩略图**: 300 x 300 px

### 团队照片
- **尺寸**: 400 x 500 px (竖版)
- **格式**: JPG高质量

## 📝 使用方法

### 替换资源步骤

1. **准备图片**: 按照上述规格要求准备好图片
2. **命名规范**: 使用英文或拼音命名，避免中文和特殊字符
3. **放入对应文件夹**: 将图片放到对应的分类文件夹中
4. **更新引用**: 如需修改页面显示的图片，在对应组件中修改路径即可

### 图片路径引用示例

```vue
<!-- 在Vue组件中使用 -->
<template>
  <!-- 方式1: 直接引用public目录 -->
  <img src="/assets/images/banner/banner1.jpg" alt="Banner">
  
  <!-- 方式2: 动态绑定 -->
  <img :src="`/assets/images/products/product1/main.jpg`" alt="Product">
</template>
```

### 批量替换技巧

如果需要批量更换所有Banner图片：
1. 准备新的3张Banner图片
2. 分别命名为 `banner1.jpg`, `banner2.jpg`, `banner3.jpg`
3. 直接覆盖 `/assets/images/banner/` 目录下的对应文件
4. 页面会自动更新显示新图片

## ⚠️ 注意事项

1. **文件名规范**: 
   - 使用小写字母和数字
   - 用连字符(-)分隔单词
   - 示例: `company-logo.png`, `product-main-image.jpg`

2. **优化建议**:
   - 使用TinyPNG等工具压缩图片
   - WebP格式比JPG/PNG体积更小
   - 视频建议使用MP4 H.264编码

3. **备份原文件**:
   - 替换前先备份原始资源
   - 建议使用版本控制(Git)管理资源变更

## 🔧 配置文件位置

**公司信息配置**: `src/config/company.json`

在此文件中可以修改：
- 公司名称（中英文）
- 标语/Slogan
- 联系方式（地址、电话、邮箱等）
- SEO相关信息

修改此文件后，网站所有页面的公司信息会自动更新。