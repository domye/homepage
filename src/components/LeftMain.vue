<template>
	<div class="container-left fade-in" :style="{ height: containerHeight }">
		<LeftLogo />
		<LeftDec />
		<LeftTag />
		<LeftTime />
		<!-- <left-talk></left-talk> -->
	</div>
</template>

<script>
	import LeftLogo from "./Left/LeftLogo.vue";
	import LeftDec from "./Left/LeftDesc.vue";
	import LeftTag from "./Left/LeftTag.vue";
	import LeftTime from "./Left/LeftTime.vue";
	// import LeftTalk from "./Left/LeftTalk.vue";
	export default {
		components: {
			LeftLogo,
			LeftDec,
			LeftTag,
			LeftTime,
			// LeftTalk,
		},
		data() {
			return {
				containerHeight: "100%",
			};
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
		/* 移除 overflow-y: scroll; */
		width: 230px;
		display: flex;
		padding: 0 15px;
		margin-bottom: 100px;
		position: sticky; /* 改为sticky定位 */
		top: 0;
		align-items: center;
		flex-direction: column;
		height: 100%; /* 高度设为100% */
		transition: height 0.4s ease;
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
