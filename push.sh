#!/bin/bash

# 自动推送脚本

cd "$(dirname "$0")"

# 配置 git
git config user.email "1770171605@qq.com"
git config user.name "xianxixun"

# 生成页面
echo "📄 生成页面..."
node src/index.js --generate

# 添加文件
echo "📦 添加文件..."
git add public/ data/

# 提交
echo "💾 提交..."
git commit -m "Auto update news - $(date '+%Y-%m-%d %H:%M')"

# 推送（需要输入 Token）
echo "🚀 推送到 GitHub..."
echo "请输入 GitHub Token（不是密码！）："
read -s GITHUB_TOKEN

git push https://xianxixun:${GITHUB_TOKEN}@github.com/xianxixun/xianxixun.git gh-pages

echo ""
echo "✅ 推送完成！"
echo "🌐 访问：https://xianxixun.github.io/xianxixun/"
