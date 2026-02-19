<template>
	<div class="skill">
		<img id="skillPc" :src="skillIconsPc" />
		<img id="skillWap" :src="skillIconsWap" />
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const skills = ref<string>(
  'windows,linux,ubuntu,bash,powershell,java,js,html,css,spring,vue,pinia,nodejs,webpack,vite,gulp,redis,mysql,git,github,docker,nginx,maven,npm,yarn,idea,vscode,sublime,md,ps'
)
const iconsPerLinePc = ref<number>(20)
const iconsPerLineWap = ref<number>(10)

const skillIconsPc = computed<string>(() =>
  `https://skillicons.dev/icons?i=${skills.value}&perline=${iconsPerLinePc.value}`
)

const skillIconsWap = computed<string>(() =>
  `https://skillicons.dev/icons?i=${skills.value}&perline=${iconsPerLineWap.value}`
)
</script>
<style>
	.skill {
		padding: 5px;
		width: 100%;
	}
	.skill img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.skill #skillWap {
		display: none;
	}
	@media (max-width: 800px) {
		.skill #skillWap {
			display: block;
			opacity: 1;
			transition: opacity 1s ease-in-out;
		}

		.skill #skillPc {
			display: none;
			opacity: 0;
			transition: opacity 1s ease-in-out;
		}
	}
</style>
