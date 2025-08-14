<template>
	<div>
		<welcome-popup></welcome-popup>
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
	import WelcomePopup from "@/components/WelcomePopup.vue";
	export default {
		components: {
			RightProject,
			RightTitle,
			RightSkill,
			WelcomePopup,
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
						type: "导航页",
						tag: "个人门户,Vue,响应式设计,前端开发,UI设计,夜间模式,自适应布局,Web开发",
						author: "Domye",
						intro:
							"🌟 精心打造的Vue个人门户网站！\n✨ 采用现代化响应式设计，完美适配各种设备\n🌓 智能主题切换，优雅的夜间模式保护您的眼睛\n💻 前端开发者的灵感源泉，UI设计的最佳实践\n期待您的探索与建议！",
					},
					{
						title: "月下·闲庭",
						url: "https://blog.domye.top",
						desc: "我的个人博客",
						tag: "技术博客,Web开发,Java编程,Typecho主题,生活随笔,学习笔记,开源分享,效率工具",
						type: "博客",
						author: "Domye",
						img: require("@/assets/img/i1.png"),
						intro:
							"📚 技术人的精神花园，记录成长每一步！\n💡 涵盖Web开发、Java编程、Typecho主题定制等深度内容\n✍️ 生活随笔与学习笔记分享，展现程序员的多元生活\n🛠️ 精选效率工具推荐，提升您的工作流\n欢迎加入讨论，一起成长！",
					},
					{
						title: "月下·书斋",
						url: "https://wiki.domye.top",
						desc: "我的技术笔记",
						tag: "技术文档,VitePress,Vue,开发指南,API参考,最佳实践,代码片段,开源项目",
						type: "Wiki",
						author: "Domye",
						img: require("@/assets/img/i7.png"),
						intro:
							"📖 开发者必备的知识宝库！\n🔧 详细的技术文档和VitePress使用指南\n🚀 Vue最佳实践与高效开发技巧\n💎 精选代码片段和开源项目解析\n📌 从入门到进阶，一站式学习资源\n期待与您共同进步！",
					},
					{
						title: "月下·墨箱",
						url: "https://cdn.domye.top",
						desc: "个人搭建的图床",
						tag: "图片托管,兰空图床,资源分享,CDN加速,媒体存储,WebP支持,外链服务",
						type: "图床",
						author: "Domye",
						img: require("@/assets/img/i2.png"),
						intro:
							"🖼️ 专业级图片托管解决方案！\n⚡ 基于兰空图床搭建，支持高速CDN加速\n📦 便捷的媒体资源管理，完美支持WebP格式\n🔗 稳定可靠的外链服务，助力您的网站建设\n免费开放使用，欢迎体验！",
					},
				],

				//我的项目
				project: [
					{
						title: "苍穹外卖",
						url: "",
						desc: "高仿美团外卖全栈项目",
						img: require("@/assets/img/i3.png"),
						type: "实战项目",
						tag: "外卖系统,SpringBoot,MySQL,微信支付,订单系统",
						author: "Domye",
						github: "https://github.com/domye/sky_take_out",
						intro:
							"🍱 美团外卖克隆版全栈实现！\n🛒 完整电商流程：从浏览→下单→支付→配送\n⚡ SpringBoot+MySQL高性能架构设计\n💳 模拟微信支付全流程\n📊 完善的订单管理系统\n（项目演示暂未上线）",
					},
					{
						title: "仿大众点评",
						url: "",
						desc: "Redis高并发解决方案",
						img: require("@/assets/img/i4.png"),
						type: "技术实验",
						tag: "点评系统,Redis缓存,秒杀系统,分布式锁,热点数据,性能优化,JMeter压测",
						author: "Domye",
						github: "https://github.com/domye/dianping",
						intro:
							"🌟 高并发场景下的Redis最佳实践！\n🔥 实现秒级10万+QPS的点评系统\n🛡️ Redis分布式锁解决超卖问题\n📈 多级缓存架构应对热点数据\n⚙️ 使用JMeter进行全链路压测\n🧩 包含：缓存雪崩/穿透解决方案\n（实验性项目，持续优化中）",
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
