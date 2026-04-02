# 🚀 GitHub Pages 部署指南

## 当前状态

✅ 代码已准备好
✅ git 仓库已初始化
✅ gh-pages 分支已创建

## 需要手动完成的步骤

### 第 1 步：在 GitHub 创建仓库

1. 打开 https://github.com/new

2. 填写：
   - **Repository name**: `xianxixun`
   - **Description**: 每日新闻早报 + 晚报
   - **Public** ✅
   - ❌ 不要勾选 "Add a README file"

3. 点击 **Create repository**

---

### 第 2 步：在本地推送代码

在终端执行以下命令：

```bash
cd /home/admin/.openclaw/workspace/news-daily

# 配置 git 用户信息（替换成你的 QQ 邮箱）
git config user.email "你的 QQ 号@qq.com"
git config user.name "xianxixun"

# 添加远程仓库（替换成你的仓库地址）
git remote set-url origin https://github.com/xianxixun/xianxixun.git

# 推送 main 分支
git push -u origin main

# 推送 gh-pages 分支
git push -u origin gh-pages
```

**推送时会提示输入 GitHub 用户名和密码：**
- Username: `xianxixun`
- Password: 你的 **GitHub Token**（不是登录密码！）

---

### 第 3 步：创建 GitHub Token（如果没有）

1. 打开 https://github.com/settings/tokens

2. 点击 **Generate new token (classic)**

3. 填写：
   - **Note**: `news-daily`
   - **Expiration**: `No expiration`
   - **Scopes**: 勾选 `repo`

4. 点击 **Generate token**

5. **复制 Token**（只显示一次，保存好！）

---

### 第 4 步：启用 GitHub Pages

1. 打开 https://github.com/xianxixun/xianxixun/settings/pages

2. **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` / `(root)`

3. 点击 **Save**

4. 等待 1-2 分钟

---

### 第 5 步：访问网站

```
https://xianxixun.github.io/xianxixun/
```

---

## 自动更新配置

推送成功后，每次运行以下命令会自动更新网站：

```bash
cd /home/admin/.openclaw/workspace/news-daily

# 抓取新闻并生成页面
node src/index.js --fetch

# 推送到 GitHub
git add public/ data/
git commit -m "Update news - $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages
```

---

## 定时自动部署

编辑 `src/cron.js`，在生成页面后添加自动推送：

```javascript
// 生成页面后添加：
const { exec } = require('child_process');
exec('git add public/ data/ && git commit -m "Auto update" && git push origin gh-pages');
```

---

## 遇到问题？

### 1. 推送失败 - 认证错误
使用 Token 代替密码：
```bash
git push https://xianxixun:YOUR_TOKEN@github.com/xianxixun/xianxixun.git gh-pages
```

### 2. 404 Not Found
等待几分钟，GitHub Pages 需要时间构建。

### 3. 页面不更新
清除浏览器缓存，或访问：
```
https://xianxixun.github.io/xianxixun/?t=时间戳
```

---

**需要帮助？** 告诉我你卡在哪一步！
