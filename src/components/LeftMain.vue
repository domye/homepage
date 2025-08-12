<template>
	<div class="container-left" :style="{ height: containerHeight }">
		<LeftLogo />
		<LeftDec />
		<LeftTag />
		<LeftTime />
		<left-talk></left-talk>
	</div>
</template>

<script>
	import LeftLogo from "./Left/LeftLogo.vue";
	import LeftDec from "./Left/LeftDesc.vue";
	import LeftTag from "./Left/LeftTag.vue";
	import LeftTime from "./Left/LeftTime.vue";
	import LeftTalk from "./Left/LeftTalk.vue";
	export default {
		components: {
			LeftLogo,
			LeftDec,
			LeftTag,
			LeftTime,
			LeftTalk,
		},
		data() {
			return {
				containerHeight: "100%",
			};
		},
		mounted() {
			window.addEventListener("scroll", this.handleScroll);
		},
		beforeDestroy() {
			window.removeEventListener("scroll", this.handleScroll);
		},
		methods: {
			handleScroll() {
				// 使用 requestAnimationFrame 优化滚动性能
				window.requestAnimationFrame(() => {
					// 检查是否滚动到底部（减去 43px 的阈值）
					const isBottom =
						window.innerHeight + window.scrollY >=
						document.body.offsetHeight - 43;
					this.containerHeight = isBottom ? "calc(100% - 48px)" : "100%";
				});
			},
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
		display: flex;
		padding: 0 15px;
		margin-bottom: 100px;
		position: fixed;
		align-items: center;
		flex-direction: column;
		/* 添加过渡动画 */
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
