#!/bin/bash

# IGA Pages 部署脚本
# 使用方法: bash deploy-iga.sh

echo "========== 开始构建项目 =========="
npm run build

if [ $? -ne 0 ]; then
  echo "❌ 构建失败！"
  exit 1
fi

echo "✅ 构建成功！"
echo ""
echo "========== 部署说明 =========="
echo "请将 dist 目录下的所有文件上传到 IGA Pages:"
echo ""
echo "步骤:"
echo "1. 登录 IGA Pages 管理后台"
echo "2. 创建或选择您的网站项目"
echo "3. 进入「部署」页面"
echo "4. 选择「手动上传」方式"
echo "5. 上传 dist 目录下的所有文件"
echo "6. 等待部署完成"
echo ""
echo "注意:"
echo "- 确保开启「HTTPS」选项"
echo "- 如果需要绑定域名，请在域名管理中配置"
echo "- 部署后可能需要等待几分钟生效"
