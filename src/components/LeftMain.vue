<template>
	<div class="container-left">
		<LeftLogo />
		<LeftDec />
		<LeftTag />
		<LeftTime />
	</div>
</template>

<script>
	import LeftLogo from "./Left/LeftLogo.vue";
	import LeftDec from "./Left/LeftDesc.vue";
	import LeftTag from "./Left/LeftTag.vue";
	import LeftTime from "./Left/LeftTime.vue";
	export default {
		components: {
			LeftLogo,
			LeftDec,
			LeftTag,
			LeftTime,
		},
	};
</script>

<style>
	.left-div {
		flex-shrink: 0;
		width: 100%;
		border-radius: 13px;
		margin-top: 15px;
		padding: 20px;
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		background: var(--item_bg_color);
	}
	.container-left {
		overflow-y: scroll;
		width: 230px;
		height: 100vh;
		display: flex;
		padding: 0 15px;
		position: fixed; /* 设置组件的位置为固定，不随页面滚动 */
		align-items: center;
		flex-direction: column; /* 设置弹性盒子的方向为垂直方向 */
	}
	.container-left::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 800px) {
		.container-left {
			display: none;
			opacity: 0;
		}
	}
</style>
