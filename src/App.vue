<template>
	<div id="app">
		<WelcomePopup />
		<div class="background"></div>
		<div class="main" ref="mainContainer">
			<LeftMain />
			<RightMain />
		</div>
		<FooterMain />
	</div>
</template>
<script>
	import FooterMain from "./components/FooterMain.vue";
	import LeftMain from "./components/LeftMain.vue";
	import RightMain from "./components/RightMain.vue";
	import WelcomePopup from "./components/WelcomePopup.vue";

	export default {
		name: "App",
		components: {
			LeftMain,
			RightMain,
			FooterMain,
			WelcomePopup,
		},
	};
</script>

<style>
	html[data-theme="Dark"] {
		--main_text_color: #fff;
		--gradient-start: #244b6b;
		--gradient-middle: #25adc5;
		--gradient-end: #227563;
		--purple_text_color: #ffffff;
		--text_bg_color: rgb(26, 4, 48);
		--item_bg_color: rgb(19, 20, 24);
		--item_hover_color: rgb(19, 23, 27);
		--item_left_title_color: rgb(255, 255, 255);
		--item_left_text_color: rgb(142, 142, 142);
		--footer_text_color: #646464;
		--left_tag_item: linear-gradient(50deg, #1f2327, #000000);
		--card_filter: 0px;
		--back_filter: 0px;
		--back_filter_color: #000000;
		--fill: #ffffff;
		--box_bg_color: #161616;
		--scrollbar-track: #000000;
	}
	html {
		--main_text_color: #eeeeee;
		--purple_text_color: #ffffff;
		--text_bg_color: #00000040;
		--item_bg_color: #0000001c;
		--item_hover_color: #33333338;
		--item_left_title_color: #ffffff;
		--item_left_text_color: #ffffff;
		--footer_text_color: #ffffff;
		--left_tag_item: rgb(27 42 57 / 20%);
		--card_filter: 0px;
		--back_filter: 68px;
		--back_filter_color: #00000060;
		--fill: #ffffff;
		--box_bg_color: #00000036;
		--scrollbar-track: linear-gradient(50deg, #a2d0ff, #ffffff);

		/* 主题背景过渡（图片层 + 纯色层）默认值，最终会被 RightSwitch 写入 */
		--bg-image: linear-gradient(50deg, #a2d0ff, #ffffff);
		--bg-color: #000000;
		--bg-image-opacity: 1;
		--bg-color-opacity: 0;
		--theme-bg-transition: 1.2s ease;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: background-color 1s ease;
		word-wrap: break-word;
	}
	a:hover,
	a:link,
	a:visited,
	a:active,
	a:focus {
		text-decoration: none;
		outline: none;
		border: none;
		color: inherit;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	/* 设置滚动条样式 */
	::-webkit-scrollbar {
		width: 0px;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--main_text_color, #000000);
		border-radius: 8px;
		height: 20%;
	}
	::-webkit-scrollbar-track {
		background: var(--scrollbar-track);
	}
	.main {
		width: 100%;
		transition: transform 1s ease;
		max-width: 1150px;
		position: relative;
		flex-direction: row;
		display: flex; /* 添加flex布局 */
		overflow-y: auto; /* 启用滚动 */
		height: 100%;
	}
	@font-face {
		font-family: "Douyin Sans";
		src: url("https://cdn.domye.top/uploads/08/1.woff2") format("woff2");
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	#app {
		display: flex;
		height: 100%;
		min-height: 100vh;
		width: 100%;
		position: relative;
		font-family: "Douyin Sans";
		transition: color 0.1s ease;
		justify-content: center;
		color: var(--main_text_color);
		z-index: 100;
	}

	/*
		主题背景层：用 opacity 交叉淡入淡出，保证
		- 白 -> 黑：图片淡出 + 纯色淡入
		- 黑 -> 白：纯色淡出 + 图片淡入
	*/
	#app::before,
	#app::after {
		content: "";
		position: fixed;
		inset: 0;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		pointer-events: none;
		transition: opacity var(--theme-bg-transition);
	}
	#app::before {
		background-image: var(--bg-image);
		opacity: var(--bg-image-opacity);
		z-index: -101;
	}
	#app::after {
		background: var(--bg-color);
		opacity: var(--bg-color-opacity);
		z-index: -102;
	}

	.background {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: var(--back_filter_color);
		backdrop-filter: blur(var(--back_filter));
		-webkit-backdrop-filter: blur(var(--back_filter));
		transition: background-color var(--theme-bg-transition),
			backdrop-filter var(--theme-bg-transition),
			-webkit-backdrop-filter var(--theme-bg-transition);
		will-change: backdrop-filter, background-color;
		transform: translateZ(0);
		z-index: -99;
	}
	/* 移除左右容器的独立滚动 */
	.container-left,
	.container-right {
		overflow-y: visible !important;
	}
</style>
