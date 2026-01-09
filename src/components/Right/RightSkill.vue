<template>
	<div class="skill">
		<!-- 低成本高收益：用 picture 避免“display:none 也会下载”的双图浪费 -->
		<picture>
			<source media="(max-width: 800px)" :srcset="skillIconsWap" />
			<img :src="skillIconsPc" alt="技能图标" decoding="async" loading="lazy" />
		</picture>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				skills:
					"windows,linux,ubuntu,bash,powershell,java,js,html,css,spring,vue,pinia,nodejs,webpack,vite,gulp,redis,mysql,git,github,docker,nginx,maven,npm,yarn,idea,vscode,sublime,md,ps",
				iconsPerLinePc: 20,
				iconsPerLineWap: 10,
			};
		},
		computed: {
			skillIconsPc() {
				return `https://skillicons.dev/icons?i=${this.skills}&perline=${this.iconsPerLinePc}`;
			},
			skillIconsWap() {
				return `https://skillicons.dev/icons?i=${this.skills}&perline=${this.iconsPerLineWap}`;
			},
		},
	};
</script>
<style>
	.skill {
		padding: 5px;
		width: 100%;
	}
	.skill picture {
		display: block;
		width: 100%;
	}
	.skill img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}
</style>
