#!/bin/bash

# 确保脚本在遇到错误时停止
set -e

# 拉取最新的代码
git pull

# 添加所有改动
git add .

# 提交改动
git commit -m "更新 blog 文件"

# 推送到远程仓库
git push

# 生成和部署 Hexo 静态文件
hexo clean
hexo g -d