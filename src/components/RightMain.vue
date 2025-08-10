<template>
	<div class="container-right">
		<right-dec></right-dec>
		<div class="iconContainer">
			<right-icon :icon="icon"></right-icon>
			<right-switch></right-switch>
		</div>
		<right-snake></right-snake>
		<right-title :page="title[0]"></right-title>
		<right-project :data="website"></right-project>
		<right-title :page="title[1]"></right-title>
		<right-project :data="project"></right-project>
		<right-title :page="title[2]"></right-title>
		<right-skill></right-skill>
	</div>
</template>

<script>
	import RightDec from "./Right/RightDec.vue";
	import RightIcon from "./Right/RightIcon.vue";
	import RightSnake from "./Right/RightSnake.vue";
	import RightSwitch from "./Right/RightSwitch.vue";
	import svg from "@/assets/svg.json";
	import RightProject from "./Right/RightProject.vue";
	import RightTitle from "./Right/RightTitle.vue";
	import RightSkill from "./Right/RightSkill.vue";
	export default {
		components: {
			RightDec,
			RightIcon,
			RightSwitch,
			RightSnake,
			RightProject,
			RightTitle,
			RightSkill,
		},
		data() {
			return {
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
				website: [
					{
						title: "月下·闲庭",
						url: "https://blog.domye.top",
						desc: "我的技术博客",
						img: require("../assets/img/i1.png"),
					},
					{
						title: "月下·墨箱",
						url: "https://blog.domye.top",
						desc: "个人搭建的图床",
						img: require("../assets/img/i2.png"),
					},
				],
				project: [
					{
						title: "苍穹外卖",
						url: "",
						desc: "Springboot项目",
						img: require("../assets/img/i3.png"),
					},
					{
						title: "黑马点评",
						url: "",
						desc: "Java后端项目",
						img: require("../assets/img/i4.png"),
					},
					{
						title: "开源项目",
						url: "https://github.com/domye/homepage",
						desc: "我做的开源项目分享",
						img: require("../assets/img/i5.png"),
					},
					{
						title: "本站源码",
						url: "",
						desc: "本网站完整的源代码",
						img: require("../assets/img/i6.png"),
					},
				],
				title: [
					{
						title: "我的网站",
						svg: svg.website,
					},
					{
						title: "我的项目",
						svg: svg.project,
					},
					{
						title: "技术栈",
						svg: svg.skill,
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
</style>
