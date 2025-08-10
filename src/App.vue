<template>
	<div id="app">
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
	html {
		/*图片模糊背景＋黑色透明卡片+白色svg**/
		--name: 主题5;
		--main_bg_color: linear-gradient(120deg, #8d6c9c, #a3544a 30%, #809aa3 60%);
		--main_text_color: #eeeeee;
		--gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
		--purple_text_color: #ffffff;
		--text_bg_color: #00000040;
		--item_bg_color: #00000050;
		--item_hover_color: #33333359;
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
		transition: transform 0.5s ease;
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
	}
</style>
