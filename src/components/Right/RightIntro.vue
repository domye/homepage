<template>
	<div class="intro-content">
		<p>
			你好，我是
			<span class="highlight-text">Domye</span>
			,一名刚上大二的学生，热爱编程&摄影&音乐，坚信热爱是生活的解药，虽然道阻且长...
		</p>
		<h3>目标🎈</h3>
		<ul class="intro-ul">
			<li>
				继续学习
				<span class="highlight-text">Web开发</span>
				全栈知识
			</li>
			<li>
				在
				<a
					class="highlight-link"
					target="_blank"
					href="https://github.com/xxynet"
				>
					Github
				</a>
				上有一个超过50⭐的开源项目
			</li>
			<li>继续精进摄影技术，拍出厉害的照片</li>
		</ul>

		<h3>兴趣爱好🎉</h3>
		<ul class="intro-ul">
			<li>网页全栈开发</li>
			<li>
				人像摄影，设备为
				<span class="highlight-text">Lumix S5M2X</span>
			</li>
			<li>
				指弹吉他，型号为
				<span class="highlight-text">Trumon Sakura520</span>
			</li>
		</ul>

		<h3>技术栈💻</h3>
		<ul class="intro-ul">
			<li>
				熟练掌握
				<span class="highlight-text">Java核心技术</span>
				与
				<span class="highlight-text">Spring Boot</span>
				框架开发
			</li>
			<li>
				掌握
				<span class="highlight-text">MySQL</span>
				数据库设计与优化，熟悉
				<span class="highlight-text">Redis缓存</span>
				应用场景及分布式解决方案
			</li>
			<li>
				具备
				<span class="highlight-text">Vue.js</span>
				前端开发能力，掌握
				<span class="highlight-text">Element UI</span>
				组件化开发
			</li>

			<li>
				了解基础
				<span class="highlight-text">JavaScript逆向</span>
				技术，能够完成常见接口加密分析
			</li>
		</ul>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.intro-content {
		background: var(--item_bg_color);
		border-radius: 12px;
		padding: 24px;
		margin: 20px 0;
		/* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); */
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.intro-content p {
		margin: 12px 0;
		font-size: 16px;
		line-height: 1.6;
		color: var(--item_left_text_color);
	}

	.intro-content p:first-child,
	.about-content p:first-child {
		margin-top: 0;
	}

	.intro-content p:last-child,
	.about-content p:last-child {
		margin-bottom: 0;
	}
	.intro-ul {
		padding-left: 20px;
		margin: 12px 0;
		font-size: 16px;
		line-height: 2;
		color: var(--item_left_text_color);
		list-style-type: disc;
	}
	.highlight-text {
		color: #b0b4f7;
		font-weight: 500;
	}

	.highlight-link {
		color: #b0b4f7 !important;
		text-decoration: underline !important;
		transition: all 0.25s ease;
	}

	.highlight-link:hover {
		color: #505392 !important;
	}
</style>
