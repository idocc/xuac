# 线上环境发布流程

## 目录
- [项目概述](#项目概述)
- [环境要求](#环境要求)
- [发布前准备](#发布前准备)
- [构建流程](#构建流程)
- [部署方式](#部署方式)
- [环境变量配置](#环境变量配置)
- [发布检查清单](#发布检查清单)
- [回滚流程](#回滚流程)
- [监控与日志](#监控与日志)
- [常见问题](#常见问题)

---

## 项目概述

本项目是基于 Next.js 15.3.1 构建的多语言国际化应用，支持中英文切换，使用 HeroUI 组件库和 Tailwind CSS。

**技术栈：**
- Next.js 15.3.1
- React 18.3.1
- TypeScript 5.6.3
- next-intl (国际化)
- HeroUI (UI 组件库)
- Tailwind CSS 4.1.11
- Framer Motion (动画)

---

## 环境要求

### 服务器环境
- **Node.js**: >= 18.17.0 (推荐使用 LTS 版本)
- **pnpm**: >= 8.0.0 (项目使用 pnpm 作为包管理器)
- **内存**: >= 2GB (构建时可能需要更多)
- **磁盘空间**: >= 5GB

### 本地开发环境
```bash
node -v  # 检查 Node.js 版本
pnpm -v  # 检查 pnpm 版本
```

---

## 发布前准备

### 1. 代码检查

#### 1.1 检查 Git 状态
```bash
# 确保所有更改已提交
git status

# 查看当前分支
git branch

# 确保在正确的发布分支上（通常是 main 或 production）
git checkout main
git pull origin main
```

#### 1.2 运行代码检查
```bash
# 运行 ESLint 检查并自动修复
pnpm run lint

# 检查 TypeScript 类型错误
npx tsc --noEmit
```

#### 1.3 本地测试
```bash
# 启动开发服务器测试
pnpm run dev

# 访问 http://localhost:3000 进行功能测试
# 测试所有页面路由：
# - 首页: /
# - 关于: /about
# - 产品: /product
# - 流程: /process
# - 安全: /security
# - 全球: /global
# - 新建: /new

# 测试国际化功能
# - 英文: /en/...
# - 中文: /zh/...
```

### 2. 依赖检查

```bash
# 检查依赖是否有安全漏洞
pnpm audit

# 如有漏洞，修复
pnpm audit fix

# 确保 lockfile 是最新的
pnpm install --frozen-lockfile
```

### 3. 静态资源检查

确保以下资源文件完整：
- `/public/allbg.mp4` - 背景视频
- `/public/allbg.png` - 背景图片
- `/public/images/` - 所有图片资源
- `/public/Sora-Light.ttf` - 自定义字体
- `/assets/` - SVG 图标资源

### 4. 国际化文件检查

确保翻译文件完整且格式正确：
```bash
# 检查 JSON 文件语法
cat messages/en.json | jq . > /dev/null && echo "en.json 格式正确"
cat messages/zh.json | jq . > /dev/null && echo "zh.json 格式正确"
```

---

## 构建流程

### 1. 生产构建

```bash
# 清理之前的构建产物（如果需要）
rm -rf .next out

# 执行生产构建
pnpm run build
```

构建过程会：
1. 编译 TypeScript 代码
2. 优化和压缩 JavaScript/CSS
3. 生成静态页面和服务端渲染页面
4. 优化图片和静态资源
5. 生成 build manifest

### 2. 构建输出检查

构建成功后检查：
```bash
# 查看构建产物
ls -lh .next

# 检查构建大小
du -sh .next

# 检查是否有构建警告或错误
```

### 3. 本地生产环境测试

```bash
# 启动生产服务器
pnpm run start

# 访问 http://localhost:3000 进行测试
# 测试内容：
# - 页面加载速度
# - 路由跳转
# - 国际化切换
# - 静态资源加载
# - 表单提交（如 CryptoSwapBox）
# - 移动端响应式
```

---

## 部署方式

### 方式一：Vercel 部署（推荐）

Vercel 是 Next.js 的官方托管平台，零配置部署。

#### 1. 首次部署

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录 Vercel
vercel login

# 部署到生产环境
vercel --prod
```

#### 2. 后续部署

```bash
# 直接部署
vercel --prod

# 或通过 Git 集成自动部署
# 推送到 main 分支会自动触发部署
git push origin main
```

#### 3. Vercel 配置

在项目根目录创建 `vercel.json`：
```json
{
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["hkg1", "sfo1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 方式二：Docker 部署

#### 1. 创建 Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# 依赖安装阶段
FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 构建阶段
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 构建应用
RUN pnpm run build

# 运行阶段
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制必要文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

#### 2. 创建 .dockerignore

```
# .dockerignore
node_modules
.next
.git
.gitignore
README.md
DEPLOYMENT.md
.env*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.log
```

#### 3. 构建和运行

```bash
# 构建 Docker 镜像
docker build -t all-day-app:latest .

# 运行容器
docker run -p 3000:3000 all-day-app:latest

# 或使用 docker-compose
# 创建 docker-compose.yml 后运行
docker-compose up -d
```

#### 4. docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### 方式三：传统服务器部署（PM2）

#### 1. 服务器准备

```bash
# SSH 连接到服务器
ssh user@your-server.com

# 安装 Node.js 和 pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -

# 安装 PM2
pnpm add -g pm2

# 创建项目目录
mkdir -p /var/www/all-day
cd /var/www/all-day
```

#### 2. 代码部署

```bash
# 方式 A: 通过 Git 拉取
git clone https://github.com/your-username/all-day.git .
git checkout main

# 方式 B: 通过 rsync 同步
# 在本地执行
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ./ user@your-server.com:/var/www/all-day/

# 在服务器上安装依赖
pnpm install --frozen-lockfile

# 构建项目
pnpm run build
```

#### 3. PM2 配置

创建 `ecosystem.config.js`：
```javascript
module.exports = {
  apps: [{
    name: 'all-day',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/all-day',
    instances: 2, // 根据 CPU 核心数调整
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
```

#### 4. 启动应用

```bash
# 创建日志目录
mkdir -p logs

# 启动应用
pm2 start ecosystem.config.js

# 查看状态
pm2 status

# 查看日志
pm2 logs all-day

# 设置开机自启
pm2 startup
pm2 save
```

#### 5. Nginx 反向代理

```nginx
# /etc/nginx/sites-available/all-day
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;

    # SSL 证书配置
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    # SSL 配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Gzip 配置
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    # 静态文件缓存
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /images/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # 代理到 Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：
```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/all-day /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

---

## 环境变量配置

### 1. 创建环境变量文件

```bash
# 生产环境变量
touch .env.production
```

### 2. 环境变量示例

```env
# .env.production

# 应用配置
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# 国际化配置
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_LOCALES=en,zh

# API 配置（如果有后端 API）
NEXT_PUBLIC_API_URL=https://api.your-domain.com

# Analytics（如果使用）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 禁用遥测
NEXT_TELEMETRY_DISABLED=1

# 其他配置
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id
```

### 3. 环境变量注入

**Vercel:**
在 Vercel Dashboard → Settings → Environment Variables 中配置

**Docker:**
通过 `docker-compose.yml` 或 `-e` 参数传递

**PM2:**
在 `ecosystem.config.js` 的 `env` 字段配置

---

## 发布检查清单

### 发布前检查 ✓

- [ ] 代码已提交到 Git 仓库
- [ ] 所有测试通过
- [ ] ESLint 检查通过
- [ ] TypeScript 类型检查通过
- [ ] 依赖安全审计通过
- [ ] 本地生产构建成功
- [ ] 本地生产环境测试通过
- [ ] 国际化翻译完整
- [ ] 静态资源检查完成
- [ ] 环境变量配置正确
- [ ] 备份当前生产环境代码

### 功能测试清单 ✓

- [ ] 首页加载正常
- [ ] 所有路由可访问（/about, /product, /process, /security, /global）
- [ ] 中英文切换正常
- [ ] 响应式布局在移动端显示正常
- [ ] 视频背景加载正常
- [ ] CryptoSwapBox 组件功能正常
- [ ] 导航栏交互正常
- [ ] Footer 链接正常
- [ ] Intercom 集成正常（如有）
- [ ] 页面动画流畅
- [ ] 图片懒加载正常
- [ ] SEO meta 标签正确

### 性能检查 ✓

- [ ] Lighthouse 性能评分 > 90
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to Interactive (TTI) < 3.8s

---

## 回滚流程

### Vercel 回滚

```bash
# 通过 Dashboard 回滚
# 1. 访问 Vercel Dashboard
# 2. 选择项目
# 3. 找到 Deployments
# 4. 选择之前的成功部署
# 5. 点击 "Promote to Production"

# 或使用 CLI
vercel rollback
```

### Docker 回滚

```bash
# 停止当前容器
docker-compose down

# 切换到之前的镜像版本
docker run -p 3000:3000 all-day-app:previous-tag

# 或从备份的镜像恢复
docker load < all-day-app-backup.tar
docker-compose up -d
```

### PM2 回滚

```bash
# 1. 切换到备份分支
cd /var/www/all-day
git fetch --all
git checkout tags/v1.0.0  # 或之前的版本 tag

# 2. 重新安装依赖和构建
pnpm install --frozen-lockfile
pnpm run build

# 3. 重启应用
pm2 restart all-day

# 4. 查看日志确认
pm2 logs all-day --lines 100
```

### 快速回滚脚本

创建 `scripts/rollback.sh`：
```bash
#!/bin/bash

# 快速回滚脚本
set -e

BACKUP_DIR="/var/www/all-day-backups"
CURRENT_VERSION=$(date +%Y%m%d_%H%M%S)
APP_DIR="/var/www/all-day"

echo "开始回滚流程..."

# 1. 备份当前版本
echo "备份当前版本..."
cp -r $APP_DIR "$BACKUP_DIR/rollback_$CURRENT_VERSION"

# 2. 恢复上一个版本
echo "恢复上一个版本..."
LAST_BACKUP=$(ls -t $BACKUP_DIR | head -n 1)
rm -rf $APP_DIR
cp -r "$BACKUP_DIR/$LAST_BACKUP" $APP_DIR

# 3. 重启服务
echo "重启服务..."
cd $APP_DIR
pm2 restart all-day

echo "回滚完成！"
pm2 status
```

---

## 监控与日志

### 1. 应用监控

**使用 Vercel Analytics（如果部署在 Vercel）：**
```typescript
// 已集成 @vercel/speed-insights
// 自动收集性能数据
```

**使用 PM2 监控：**
```bash
# 实时监控
pm2 monit

# 查看详细信息
pm2 show all-day

# 查看内存和 CPU 使用
pm2 list
```

### 2. 日志管理

**PM2 日志：**
```bash
# 实时日志
pm2 logs all-day

# 查看错误日志
pm2 logs all-day --err

# 清空日志
pm2 flush

# 日志轮转（自动管理日志大小）
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
```

**Nginx 日志：**
```bash
# 访问日志
tail -f /var/log/nginx/access.log

# 错误日志
tail -f /var/log/nginx/error.log
```

### 3. 错误追踪

可以集成 Sentry 进行错误追踪：

```bash
pnpm add @sentry/nextjs
```

配置 `next.config.js`：
```javascript
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig(
  {
    // 你的 Next.js 配置
  },
  {
    // Sentry 配置
    silent: true,
    org: "your-org",
    project: "all-day",
  }
);
```

### 4. 健康检查

创建健康检查端点 `app/api/health/route.ts`：
```typescript
export async function GET() {
  return Response.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
}
```

设置监控服务定期检查：
```bash
# 使用 cron 定期检查
*/5 * * * * curl -f https://your-domain.com/api/health || echo "Health check failed"
```

---

## 常见问题

### Q1: 构建时内存不足

**问题：** `JavaScript heap out of memory`

**解决方案：**
```bash
# 增加 Node.js 内存限制
NODE_OPTIONS="--max-old-space-size=4096" pnpm run build

# 或在 package.json 中修改构建脚本
"build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
```

### Q2: 静态资源 404

**问题：** 部署后图片或视频无法加载

**解决方案：**
1. 确保 `public` 目录在构建产物中
2. 检查资源路径是否正确（使用相对路径）
3. 确保 Nginx 正确配置静态资源代理

### Q3: 国际化路由不工作

**问题：** 语言切换后页面 404

**解决方案：**
1. 检查 `next.config.js` 中的 i18n 配置
2. 确保 `messages/` 目录下的翻译文件存在
3. 检查路由配置是否正确

### Q4: 构建后样式丢失

**问题：** 生产环境样式显示异常

**解决方案：**
1. 确保 PostCSS 和 Tailwind CSS 配置正确
2. 检查 `globals.css` 是否被正确导入
3. 清除构建缓存：`rm -rf .next`

### Q5: PM2 应用重启失败

**问题：** `pm2 restart` 后应用无法启动

**解决方案：**
```bash
# 删除旧进程
pm2 delete all-day

# 重新启动
pm2 start ecosystem.config.js

# 查看详细错误
pm2 logs all-day --err --lines 100
```

### Q6: 视频文件过大加载慢

**问题：** `allbg.mp4` 加载时间过长

**解决方案：**
1. 压缩视频文件
2. 提供不同质量的视频版本
3. 使用 CDN 加速
4. 添加占位图片

### Q7: Nginx 502 Bad Gateway

**问题：** Nginx 显示 502 错误

**解决方案：**
```bash
# 检查 Next.js 应用是否运行
pm2 status

# 检查端口是否正确
netstat -tlnp | grep 3000

# 检查 Nginx 配置
sudo nginx -t

# 重启服务
pm2 restart all-day
sudo systemctl restart nginx
```

---

## 性能优化建议

### 1. 图片优化
- 使用 Next.js Image 组件
- 压缩图片（TinyPNG, ImageOptim）
- 使用 WebP 格式
- 实现懒加载

### 2. 代码分割
- 使用动态导入 `dynamic()`
- 避免大型第三方库
- 使用 `next/bundle-analyzer` 分析打包大小

### 3. 缓存策略
- 配置适当的 Cache-Control 头
- 使用 CDN 加速静态资源
- 启用 HTTP/2

### 4. 监控指标
- 定期检查 Lighthouse 分数
- 监控 Core Web Vitals
- 设置性能预算

---

## 安全建议

1. **HTTPS**: 始终使用 HTTPS
2. **环境变量**: 不要在代码中硬编码敏感信息
3. **依赖更新**: 定期更新依赖，修复安全漏洞
4. **CSP**: 配置内容安全策略
5. **限流**: 在 Nginx 层配置请求限流
6. **日志**: 不要在日志中记录敏感信息

---

## 联系与支持

如遇到问题，请联系：
- 技术支持：tech-support@your-domain.com
- 运维团队：devops@your-domain.com

---

**最后更新：** 2025-10-10
**版本：** 1.0.0

