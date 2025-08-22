// 简单的国际化支持
export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'zh';

export const translations = {
  zh: {
    'site.title': '零一格物',
    'site.description': '在零一格物，数字是语言，AI是工具，我们认知世界，也重构世界。',
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.about': '关于',
    'blog.readMore': '阅读更多',
    'blog.publishedOn': '发布于',
    'blog.updatedOn': '更新于',
    'footer.copyright': '版权所有',
    'search.placeholder': '搜索文章...',
    'error.notFound': '页面未找到',
    'error.serverError': '服务器错误',
  },
  en: {
    'site.title': 'LYGW - 01World',
    'site.description': 'At LYGW, numbers are language, AI is the tool, we understand the world and reshape it.',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'blog.readMore': 'Read More',
    'blog.publishedOn': 'Published on',
    'blog.updatedOn': 'Updated on',
    'footer.copyright': 'All rights reserved',
    'search.placeholder': 'Search articles...',
    'error.notFound': 'Page not found',
    'error.serverError': 'Server error',
  },
} as const;

export function useTranslations(lang: Language = defaultLanguage) {
  return function t(key: keyof typeof translations[typeof defaultLanguage]) {
    return translations[lang][key] || translations[defaultLanguage][key] || key;
  };
}

// Language detection utility
export function detectLanguage(request?: Request): Language {
  if (!request) return defaultLanguage;
  
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLanguage;
  
  // Simple language detection - can be enhanced
  if (acceptLanguage.includes('zh')) return 'zh';
  if (acceptLanguage.includes('en')) return 'en';
  
  return defaultLanguage;
}

// URL language utilities
export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/([a-z]{2})\//);
  
  if (langMatch && langMatch[1] in languages) {
    return langMatch[1] as Language;
  }
  
  return defaultLanguage;
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLanguage) return path;
  return `/${lang}${path}`;
}