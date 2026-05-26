// Showcase 展示配置
// 从各产品分类中选择要展示的图片（直接引用原路径，不复制）
export const showcaseConfig = [
  // 圆井盖 (round-cover) - 选择 3 张
  {
    categoryId: 'round-cover',
    nameKey: 'products.roundCover',
    images: ['yuanjinggai11.webp', 'yuanjinggai12.webp', 'yuanjinggai13.webp']
  },
  
  // 方井盖 (square-cover) - 选择 4 张
  {
    categoryId: 'square-cover',
    nameKey: 'products.squareCover',
    images: ['fangjinggai12.webp', 'fangjinggai14.webp', 'fangjinggai27.webp', 'fangjinggai29.webp']
  },
  
  // 篦子 (grating) - 选择 3 张
  {
    categoryId: 'grating',
    nameKey: 'products.grating',
    images: ['bizi2.webp', 'bizi3.webp', 'bizi5.webp']
  },
  
  // 定制铸造 (custom-casting) - 选择 2 张
  {
    categoryId: 'custom-casting',
    nameKey: 'products.customCasting',
    images: ['dingzhi.webp', 'dingzhi2.webp']
  }
]

// 图片路径映射
const categoryPathMap = {
  'round-cover': '/assets/images/products/round-cover/',
  'square-cover': '/assets/images/products/square-cover/',
  'grating': '/assets/images/products/grating/',
  'custom-casting': '/assets/images/products/custom-casting/'
}

// 获取 showcase 展示的完整图片列表
export function getShowcaseImages() {
  const images = []
  
  showcaseConfig.forEach(category => {
    category.images.forEach(filename => {
      const basePath = categoryPathMap[category.categoryId]
      if (basePath) {
        images.push({
          categoryId: category.categoryId,
          nameKey: category.nameKey,
          image: `${basePath}${filename}`
        })
      }
    })
  })
  
  return images
}
