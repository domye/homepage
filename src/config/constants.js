import svg from "@/assets/svg.json";

const stripTrailingSlash = (url) => (url ? url.replace(/\/$/, "") : "");

const CDN_URL = stripTrailingSlash(process.env.VUE_APP_CDN_URL) || "https://cdn.domye.top";
const GITHUB_USERNAME = process.env.VUE_APP_GITHUB_USERNAME || "domye";

export const ENV = {
	CDN_URL,
	GITHUB_USERNAME,
};

// 页面标题配置
export const PAGE_TITLES = {
	WEBSITE: {
		title: "我的网站",
		svg: svg.website,
	},
	PROJECT: {
		title: "我的项目",
		svg: svg.project,
	},
	SKILL: {
		title: "技术栈",
		svg: svg.skill,
	},
	ABOUT: {
		title: "About",
		svg: svg.content,
	},
	FAQ: {
		title: "FAQ",
		svg: svg.content,
	},
};

// 路由路径常量
export const ROUTES = {
	HOME: "/",
	CONTENT: "/content",
	FAQ: "/faq",
};

// 主题常量
export const THEME_CONFIG = {
	LIGHT: "Light",
	DARK: "Dark",
	STORAGE_KEY: "themeState",
	SNAKE_URL_TEMPLATE: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_USERNAME}/output/github-contribution-grid-snake-{theme}.svg`,
	BACKGROUND_URL_LIGHT: `url(${CDN_URL}/uploads/07/1753247356.webp)`,
	BACKGROUND_COLOR_DARK: "#000000",
};

