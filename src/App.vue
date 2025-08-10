<template>
	<div id="app">
		<div class="container-filter"></div>
		<div class="container-main">
			<LeftMain></LeftMain>
			<right-main></right-main>
		</div>
		<footer-main></footer-main>
	</div>
</template>

<script>
	import FooterMain from "./components/FooterMain.vue";
	import LeftMain from "./components/LeftMain.vue";
	import RightMain from "./components/RightMain.vue";

	export default {
		name: "App",
		components: {
			LeftMain,
			RightMain,
			FooterMain,
		},
	};
</script>

<style>
	html[data-theme="Dark"] {
		--main_text_color: #fff;
		--gradient: linear-gradient(
			120deg,
			rgb(133, 62, 255),
			#f76cc6 30%,
			rgb(255, 255, 255) 60%
		);
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
	}
	html {
		/*图片模糊背景＋黑色透明卡片+白色svg**/
		--name: 主题5;
		/* --main_bg_color: url(../img/background.jpg); 为了页面首次显示更顺滑，背景图放在js中实现*/
		--main_text_color: #eeeeee;
		--gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
		--purple_text_color: #ffffff;
		--text_bg_color: #00000040;
		--item_bg_color: #00000038;
		--item_hover_color: #33333338;
		--item_left_title_color: #ffffff;
		--item_left_text_color: #ffffff;
		--footer_text_color: #ffffff;
		--left_tag_item: rgb(27 42 57 / 20%);
		--card_filter: 0px;
		--back_filter: 68px;
		--back_filter_color: #00000060;
		--fill: #ffffff;
	}

	/* @import "./assets/css/style.css"; */
	/* @import "./assets/css/theme.css"; */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: background-color 0.2s ease;
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
		background-color: var(
			--main_bg_color,
			linear-gradient(50deg, #a2d0ff, #ffffff)
		);
	}
	.container-main {
		width: 100%;
		transition: transform 1s ease;
		max-width: 1150px;
		position: relative;
		flex-direction: row;
	}
	#app {
		display: flex;
		height: 100%;
		min-height: 100vh;
		width: 100%;
		position: relative;
		font-family: "Douyin Sans";
		background: var(--main_bg_color);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		transition: color 0.1s ease;
		justify-content: center;
		color: var(--main_text_color);
		z-index: 100;
	}

	.container-filter {
		position: fixed;
		width: 100%;
		height: 100%;
		background: var(--back_filter_color);
		backdrop-filter: blur(var(--back_filter));
		-webkit-backdrop-filter: blur(var(--back_filter));
		z-index: -99;
	}
	@media (min-width: 800px) {
		.index-logo {
			display: none;
		}
	}

	@media (max-width: 1150px) {
		.projectItem {
			margin: 10px;
			transition: margin 1s ease-in-out; /* 添加过渡动画 */
		}

		.a {
			width: calc(50% - 20px);
			transition: width 1s ease-in-out; /* 添加过渡动画 */
		}
	}
	@media (max-width: 800px) {
		.container-left {
			display: none;
			transition: opacity 1s ease-in-out; /* 添加过渡动画 */
			opacity: 0;
		}

		.a {
			height: 110px;
			margin: 8px 15px;
			width: calc(100% - 30px);
			transition: height 1s ease-in-out, margin 1s ease-in-out,
				width 1s ease-in-out; /* 添加过渡动画 */
		}

		.container-right {
			width: 100%;
			transition: width 1s ease-in-out; /* 添加过渡动画 */
		}

		.tanChiShe {
			width: 100%;
			transition: width 1s ease-in-out; /* 添加过渡动画 */
		}

		.description {
			font-size: 4vw;
			transition: font-size 1s ease-in-out; /* 添加过渡动画 */
		}

		.welcome {
			font-size: 8vw;
			margin: 2vw 0;
			transition: font-size 1s ease-in-out, margin 1s ease-in-out; /* 添加过渡动画 */
		}

		.iconContainer {
			margin-top: 4vw;
			transition: margin-top 1s ease-in-out; /* 添加过渡动画 */
		}

		.projectItem {
			padding: 10px;
			transition: padding 1s ease-in-out; /* 添加过渡动画 */
		}

		.projectItemLeft p {
			font-size: 13px;
			transition: font-size 1s ease-in-out; /* 添加过渡动画 */
		}

		.projectItemLeft h1 {
			font-size: 18px;
			transition: font-size 1s ease-in-out; /* 添加过渡动画 */
		}

		.projectItem:hover h1 {
			font-size: 20px;
			transition: font-size 1s ease-in-out; /* 添加过渡动画 */
		}

		.skill #skillWap {
			display: block;
			opacity: 1;
			transition: opacity 1s ease-in-out; /* 添加过渡动画 */
		}

		.skill #skillPc {
			display: none;
			opacity: 0;
			transition: opacity 1s ease-in-out; /* 添加过渡动画 */
		}

		.iconItem {
			width: 35px;
			height: 35px;
			transition: width 1s ease-in-out, height 1s ease-in-out; /* 添加过渡动画 */
		}

		.switch {
			width: 40px;
			height: 35px;
			transition: width 1s ease-in-out, height 1s ease-in-out; /* 添加过渡动画 */
		}
	}
</style>
