<template>
	<footer>
		Domye © 2025 |
		<a target="_blank" href="https://beian.miit.gov.cn/">皖ICP备2024052746号</a>
	</footer>
</template>

<script>
	export default {};
</script>

<style>
	footer {
		position: absolute;
		padding: 10px;
		text-align: center;
		width: 100%;
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		background: var(--item_bg_color);
		color: var(--footer_text_color);
		font-size: 13px;
		bottom: 0;
	}
</style>
