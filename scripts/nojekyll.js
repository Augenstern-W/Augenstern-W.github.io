// 让 hexo 生成的 public 目录包含 .nojekyll，避免 GitHub Pages 用 Jekyll 处理
const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('after_generate', function () {
  const src = path.join(hexo.base_dir, 'source', '.nojekyll');
  const dest = path.join(hexo.public_dir, '.nojekyll');
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});
