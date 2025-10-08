# i18n (国际化) 使用指南

## 📚 目录
1. [基础配置](#基础配置)
2. [使用方法](#使用方法)
3. [实际示例](#实际示例)
4. [切换语言](#切换语言)
5. [最佳实践](#最佳实践)

---

## 基础配置

你的项目已经配置好了 `next-intl`，配置文件位于：

### 1. `in18/request.ts` - 国际化配置
```typescript
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en"; // 当前语言设置为英文

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

### 2. `next.config.js` - Next.js 配置
```javascript
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./in18/request.ts");
export default withNextIntl(nextConfig);
```

### 3. `app/layout.tsx` - 布局文件
使用 `NextIntlClientProvider` 包裹应用：
```typescript
<NextIntlClientProvider>
  <Navbar />
  <main>{children}</main>
  <Footer />
</NextIntlClientProvider>
```

---

## 使用方法

### 1. 在客户端组件中使用

在 `"use client"` 组件中使用 `useTranslations` hook：

```typescript
"use client";
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('welcome')}</p>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 2. 访问嵌套的翻译

```typescript
const t = useTranslations('HomePage');

// 访问 HomePage.features.mainCoins
<h3>{t('features.mainCoins')}</h3>

// 访问 HomePage.features.mainCoinsDesc
<p>{t('features.mainCoinsDesc')}</p>

// 访问 HomePage.buttons.getStarted
<button>{t('buttons.getStarted')}</button>
```

### 3. 在服务端组件中使用

```typescript
import { getTranslations } from 'next-intl/server';

export default async function ServerPage() {
  const t = await getTranslations('HomePage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
```

### 4. 使用不同的命名空间

```typescript
// 在同一个组件中使用多个命名空间
const tHome = useTranslations('HomePage');
const tNav = useTranslations('Navbar');
const tCommon = useTranslations('Common');

<h1>{tHome('title')}</h1>
<nav>{tNav('home')}</nav>
<button>{tCommon('confirm')}</button>
```

---

## 实际示例

### 示例 1：基础使用（当前 page.tsx）

```typescript
"use client";
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('welcome')}</p>
    </div>
  );
}
```

### 示例 2：替换硬编码的文本

**之前 (硬编码):**
```typescript
const mockExchangeFeatures = [
  {
    id: 1,
    icon: icon1,
    title: "主流币种",
    description: "覆盖BTC/ETH/USDT,直兑USD、EUR、CNY等主流法币。",
  },
  // ...
];
```

**之后 (使用 i18n):**
```typescript
const t = useTranslations('HomePage');

const mockExchangeFeatures = [
  {
    id: 1,
    icon: icon1,
    title: t('features.mainCoins'),
    description: t('features.mainCoinsDesc'),
  },
  {
    id: 2,
    icon: icon2,
    title: t('features.fastDeposit'),
    description: t('features.fastDepositDesc'),
  },
  // ...
];
```

### 示例 3：按钮和链接

```typescript
const t = useTranslations('HomePage');

<Button>{t('buttons.getStarted')}</Button>
<Link href="/about">{t('buttons.learnMore')}</Link>
```

### 示例 4：带参数的翻译

**在 messages/en.json:**
```json
{
  "HomePage": {
    "greeting": "Hello, {name}!",
    "itemCount": "You have {count} items"
  }
}
```

**在组件中:**
```typescript
const t = useTranslations('HomePage');

<p>{t('greeting', { name: 'John' })}</p>
// 输出: Hello, John!

<p>{t('itemCount', { count: 5 })}</p>
// 输出: You have 5 items
```

### 示例 5：复数形式

**在 messages/en.json:**
```json
{
  "HomePage": {
    "items": "{count, plural, =0 {no items} =1 {one item} other {# items}}"
  }
}
```

**在组件中:**
```typescript
const t = useTranslations('HomePage');

<p>{t('items', { count: 0 })}</p>  // no items
<p>{t('items', { count: 1 })}</p>  // one item
<p>{t('items', { count: 5 })}</p>  // 5 items
```

---

## 切换语言

### 方法 1：修改 `in18/request.ts`

目前你的配置是静态的。要支持动态语言切换，需要修改配置：

```typescript
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // 从 cookie 或其他来源获取语言设置
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

### 方法 2：使用 URL 路径 (推荐)

创建语言切换组件：

```typescript
"use client";
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    // 保存到 cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    // 刷新页面以应用新语言
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  );
}
```

### 方法 3：使用环境变量

在 `.env.local`:
```
NEXT_PUBLIC_DEFAULT_LOCALE=zh
```

在 `in18/request.ts`:
```typescript
const locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en";
```

---

## 最佳实践

### 1. 组织翻译文件结构

```json
{
  "ComponentName": {
    "section1": {
      "title": "...",
      "description": "..."
    },
    "section2": {
      "title": "...",
      "description": "..."
    },
    "buttons": {
      "submit": "...",
      "cancel": "..."
    }
  }
}
```

### 2. 命名约定

- 使用 PascalCase 作为顶层键（组件名）
- 使用 camelCase 作为嵌套键
- 保持键名描述性和一致性

### 3. 翻译文件同步

确保所有语言文件具有相同的结构：
- `messages/en.json`
- `messages/zh.json`
- `messages/es.json`
- ...

### 4. 类型安全（可选）

创建类型定义：

```typescript
// types/i18n.ts
import en from '@/messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
```

### 5. 提取常用翻译

对于在多个组件中使用的文本，创建 `Common` 命名空间：

```json
{
  "Common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "confirm": "Confirm",
    "cancel": "Cancel"
  }
}
```

### 6. 避免在翻译中使用 HTML

**不推荐:**
```json
{
  "description": "Click <a href='/link'>here</a>"
}
```

**推荐:**
```json
{
  "description": "Click {link}",
  "linkText": "here"
}
```

```typescript
<p>
  {t('description', {
    link: <a href="/link">{t('linkText')}</a>
  })}
</p>
```

---

## 快速开始检查清单

- ✅ `next-intl` 已安装
- ✅ `in18/request.ts` 配置完成
- ✅ `next.config.js` 配置完成
- ✅ `messages/en.json` 翻译文件存在
- ✅ `messages/zh.json` 中文翻译文件已创建
- ✅ `NextIntlClientProvider` 在 layout.tsx 中配置
- ✅ 可以在组件中使用 `useTranslations('HomePage')`

---

## 当前项目状态

你的项目已经配置好了基础的 i18n 支持：

1. ✅ 在 `app/page.tsx` 中已经导入并初始化：
```typescript
const t = useTranslations('HomePage');
```

2. ✅ 现在可以使用 `t('key')` 来获取翻译

3. 📝 下一步：将硬编码的文本替换为翻译键

---

## 调试技巧

### 1. 检查翻译是否加载

```typescript
const t = useTranslations('HomePage');
console.log(t('title')); // 应该输出翻译后的文本
```

### 2. 检查当前语言

```typescript
import { useLocale } from 'next-intl';

const locale = useLocale();
console.log('Current locale:', locale);
```

### 3. 处理缺失的翻译

```typescript
// 可以提供默认值
{t('missingKey', { defaultValue: 'Default text' })}
```

---

## 常见问题

### Q: 为什么我的翻译没有显示？
A: 检查：
1. JSON 文件路径是否正确
2. 键名是否拼写正确
3. 是否在客户端组件中添加了 `"use client"`
4. `NextIntlClientProvider` 是否正确包裹

### Q: 如何添加新语言？
A: 
1. 在 `messages/` 目录下创建新的 JSON 文件（如 `es.json`）
2. 复制 `en.json` 的结构并翻译内容
3. 更新 `in18/request.ts` 以支持新语言

### Q: 可以在服务端组件中使用吗？
A: 可以，使用 `getTranslations` 而不是 `useTranslations`

---

## 资源链接

- [next-intl 官方文档](https://next-intl-docs.vercel.app/)
- [Next.js 国际化指南](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

---

## 联系与支持

如有问题，请查看项目文档或提交 issue。

