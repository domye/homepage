<template>
	<footer>
		<!-- Domye © 2025 |
		<a target="_blank" href="https://beian.miit.gov.cn/">皖ICP备2024052746号</a> -->
		<div class="github-badge-mobile github-badge">
			<span class="badge-subject">Copyright</span>
			<a href="https://blog.domye.top" target="_blank">
				<span class="badge-value bg-purple">©2025</span>
			</a>
		</div>
		<div class="github-badge">
			<span class="badge-subject">皖ICP备</span>
			<a href="http://beian.miit.gov.cn/" target="_blank">
				<span class="badge-value bg-blue">2024052746号</span>
			</a>
			<span class="badge-subject">皖公网安备</span>
			<a
				href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34130202000763"
				target="_blank"
			>
				<span class="badge-value bg-green">34130202000763号</span>
			</a>
		</div>
		<div class="github-badge-mobile github-badge">
			<span class="badge-subject">Github</span>
			<a href="https://github.com/domye/homepage" target="_blank">
				<span class="badge-value bg-orange">Domye</span>
			</a>
		</div>
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
	/*底部页脚*/
	.github-badge {
		display: inline-block;
		border-radius: 4px;
		text-shadow: none;
		font-size: 12px;
		color: #fff;
		line-height: 15px;
		overflow-wrap: break-word; /* 添加此行 */
	}
	.github-badge .badge-subject {
		display: inline-block;
		background-color: #4d4d4d;
		padding: 4px 4px 4px 6px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	.github-badge .badge-value {
		display: inline-block;
		padding: 4px 6px 4px 4px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		margin-right: 10px;
	}
	.github-badge .bg-blue {
		background-color: #23719e;
	}
	.github-badge .bg-orange {
		background-color: #b4862f;
	}
	.github-badge .bg-red {
		background-color: #f00;
	}
	.github-badge .bg-green {
		background-color: #40a864;
	}
	.github-badge .bg-purple {
		background-color: #497e75;
	}
	@media (max-width: 800px) {
		.github-badge-right {
			display: none;
		}
	}
</style>
