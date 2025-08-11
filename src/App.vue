<template>
	<div id="app">
		<div class="background"></div>
		<div class="main">
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
		background-color: var(
			--main_bg_color,
			linear-gradient(50deg, #a2d0ff, #ffffff)
		);
	}
	.main {
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

	.background {
		position: fixed;
		width: 100%;
		height: 100%;
		background: var(--back_filter_color);
		backdrop-filter: blur(var(--back_filter));
		-webkit-backdrop-filter: blur(var(--back_filter));
		z-index: -99;
	}
</style>
