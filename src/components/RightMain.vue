<template>
	<div class="container-right">
		<RightDec class="fade-in" />
		<div class="iconContainer">
			<RightIcon :icon="icon" class="fade-in" />
			<RightSwitch class="fade-in" />
		</div>
		<RightSnake class="fade-in" />
		<RightTab class="fade-in" />
		<transition name="fade" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import RightDec from "./Right/RightDesc.vue";
	import RightIcon from "./Right/RightIcon.vue";
	import RightSnake from "./Right/RightSnake.vue";
	import RightSwitch from "./Right/RightSwitch.vue";
	import { socialLinks } from "@/config/data";
	import RightTab from "./Right/RightTab.vue";
	export default {
		components: {
			RightDec,
			RightIcon,
			RightSwitch,
			RightSnake,
			RightTab,
		},
		data() {
			return {
				transitionName: "slide-left",
				icon: socialLinks,
			};
		},
	};
</script>

<style>
	.container-right {
		width: calc(100% - 230px);
		display: flex;
		padding: 20px;
		position: relative;
		/* 移除 float: right; */
		padding-bottom: 50px;
		flex-direction: column;
		flex-grow: 1; /* 添加flex-grow */
	}
	.iconContainer {
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		overflow-x: scroll;
		margin-top: 20px;
	}
	.iconContainer::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 800px) {
		.container-right {
			width: 100%;
			transition: width 1s ease-in-out;
		}
	} /* 滑动动画 */
	/* 定义过渡动画 */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.8s cubic-bezier(0.47, 0, 0.745, 0.715); /* 延长过渡时间并使用自定义缓动函数 */
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
