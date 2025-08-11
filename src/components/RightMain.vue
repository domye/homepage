<template>
	<div class="container-right">
		<right-dec></right-dec>
		<div class="iconContainer">
			<right-icon :icon="icon"></right-icon>
			<right-switch></right-switch>
		</div>
		<right-snake></right-snake>
		<right-tab></right-tab>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import RightDec from "./Right/RightDesc.vue";
	import RightIcon from "./Right/RightIcon.vue";
	import RightSnake from "./Right/RightSnake.vue";
	import RightSwitch from "./Right/RightSwitch.vue";
	import svg from "@/assets/svg.json";
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
				icon: [
					{
						tip: "Github",
						url: "https://github.com/domye",
						svg: svg.Github,
					},
					{
						tip: "B站",
						url: "https://space.bilibili.com/259725803",
						svg: svg.bili,
						box: "0 0 1071 1024",
					},
					{
						tip: "抖音",
						url: "https://www.douyin.com/user/MS4wLjABAAAAB6SzADkpU7jExFNzB_2JvzzUwb13YFAqTc8kYmaqzFs",
						svg: svg.douyin,
					},
					{
						tip: "博客",
						url: "https://blog.domye.top",
						svg: svg.blog,
					},
				],
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
		float: right;
		padding-bottom: 50px;
		flex-direction: column;
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
