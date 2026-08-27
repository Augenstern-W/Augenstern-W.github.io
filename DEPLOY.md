# 部署备忘

站点地址：https://Augenstern-W.github.io

## 一、改图片 / 文章 / 配置后同步

在 `d:\Blog\hexo` 下执行：

```powershell
npx hexo generate
npx hexo deploy
```

`generate` 生成静态页面，`deploy` 推送到 GitHub（main 分支）。

## 二、图片放哪里

所有图片对应 `source/imgs`（会覆盖主题默认图）：

| 内容 | 位置 |
|------|------|
| 背景图 | `source/imgs/slide/background1.jpg` ~ `background6.jpg` |
| 小屏背景 | `source/imgs/xsbg.gif` |
| 头像 | `source/imgs/avatar.jpg` |
| 文章预览图 | `source/imgs/preview/preview1.jpg` ~ `preview4.jpg` |

改完文件名若与配置不一致，同步修改 `themes/gal/_config.yml` 里的对应项。

## 三、同步源码到 source 分支（可选但推荐）

```powershell
git add -A
git commit -m "更新内容"
git push origin source
```

## 四、分支策略

- `source`：Hexo 源码（配置、文章、主题、脚本）
- `main`：部署产物（由 `hexo deploy` 自动生成并强制推送）

## 五、常见问题

- **浏览器显示旧图**：`Ctrl + F5` 强制刷新。
- **push 报 `Connection reset by peer`**：SSH 网络偶发中断，重跑 `npx hexo deploy` 即可。
