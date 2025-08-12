<template>
	<div>
		<right-title :page="title[0]"></right-title>
		<right-project :data="website"></right-project>
		<right-title :page="title[1]"></right-title>
		<right-project :data="project"></right-project>
		<right-title :page="title[2]"></right-title>
		<right-skill></right-skill>
	</div>
</template>

<script>
	import svg from "@/assets/svg.json";
	import RightProject from "@/components/Right/RightProject.vue";
	import RightTitle from "@/components/Right/RightTitle.vue";
	import RightSkill from "@/components/Right/RightSkill.vue";
	export default {
		components: {
			RightProject,
			RightTitle,
			RightSkill,
		},
		data() {
			return {
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

				//我的网站
				website: [
					{
						title: "月下·传舍",
						url: "https://www.domye.top",
						desc: "Vue搭建的个人主页",
						img: require("@/assets/img/i1-2.png"),
						type: "博客",
						github:
							"1,3,32,2323231,32131231,312312312321,321321312312,lxsdsfdslf,dfdsfds,fdasfasd,fdasfds,l撒旦大神积分,的撒大,范德萨发发发,发大水发射点发2",
						tag: "1,3,32,2323231,32131231,312312312321,321321312312",
						author: "Domye",
						intro: "可以用于简单的页面展示\n乐于分享",
					},
					{
						title: "月下·闲庭",
						url: "https://blog.domye.top",
						desc: "我的技术博客",
						img: require("@/assets/img/i1.png"),
					},
					{
						title: "月下·墨箱",
						url: "https://blog.domye.top",
						desc: "个人搭建的图床",
						img: require("@/assets/img/i2.png"),
					},
				],

				//我的项目
				project: [
					{
						title: "苍穹外卖",
						url: "",
						desc: "仿美团外卖项目",
						img: require("@/assets/img/i3.png"),
					},
					{
						title: "仿大众点评",
						url: "",
						desc: "利用Redis解决高并发",
						img: require("@/assets/img/i4.png"),
					},
					{
						title: "开源项目",
						url: "https://github.com/domye/",
						desc: "我做的开源项目分享",
						img: require("@/assets/img/i5.png"),
					},
					{
						title: "本站源码",
						url: "https://github.com/domye/homepage",
						desc: "本网站完整的源代码",
						img: require("@/assets/img/i6.png"),
					},
				],
			};
		},
	};
</script>

<style></style>
