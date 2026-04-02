# 每日新闻早报 + 晚报

自动新闻聚合网站 - 每天早上 8 点和晚上 6 点自动更新

🌐 **在线访问**: https://morning-evening-news.github.io/xianxixun/

---

## 功能

- ✅ 每日早报（8:00 发布）
- ✅ 每日晚报（18:00 发布）
- ✅ 农历日期显示
- ✅ 自动抓取新闻
- ✅ 响应式设计（手机/电脑）

---

## 查看效果

**GitHub Pages 部署中**，几分钟后访问：

```
https://morning-evening-news.github.io/xianxixun/
```

---

## 本地运行

```bash
cd /home/admin/.openclaw/workspace/news-daily
npm install
node src/index.js --serve
```

访问 http://localhost:3000

---

## 更新新闻

```bash
node src/index.js --fetch
git add public/ data/
git commit -m "Update news"
git push
```

---

## 技术栈

- Node.js + Express
- lunar-javascript（农历）
- node-cron（定时任务）
- GitHub Pages（部署）

---

**开发**: xianxixun
**邮箱**: 1770171605@qq.com
