import svg from '@/assets/svg.json'

const stripTrailingSlash = (url: string) => (url ? url.replace(/\/$/, '') : '')

const CDN_URL = stripTrailingSlash(import.meta.env.VITE_CDN_URL as string) || 'https://cdn.domye.top'
const GITHUB_USERNAME = (import.meta.env.VITE_GITHUB_USERNAME as string) || 'domye'

export const ENV = {
  CDN_URL,
  GITHUB_USERNAME,
}

// 页面标题配置
export const PAGE_TITLES: Record<string, { title: string; svg: string }> = {
  WEBSITE: {
    title: '我的网站',
    svg: (svg as Record<string, string>).website,
  },
  PROJECT: {
    title: '我的项目',
    svg: (svg as Record<string, string>).project,
  },
  SKILL: {
    title: '技术栈',
    svg: (svg as Record<string, string>).skill,
  },
  ABOUT: {
    title: 'About',
    svg: (svg as Record<string, string>).content,
  },
  FAQ: {
    title: 'FAQ',
    svg: (svg as Record<string, string>).content,
  },
}

// 路由路径常量
export const ROUTES = {
  HOME: '/',
  CONTENT: '/content',
  FAQ: '/faq',
}

// 主题常量
export const THEME_CONFIG = {
  LIGHT: 'Light',
  DARK: 'Dark',
  STORAGE_KEY: 'themeState',
  SNAKE_URL_TEMPLATE: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_USERNAME}/output/github-contribution-grid-snake-{theme}.svg`,
  BACKGROUND_URL_LIGHT: `url(${CDN_URL}/uploads/07/1753247356.webp)`,
  BACKGROUND_COLOR_DARK: '#000000',
}
