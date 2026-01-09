<template>
	<div class="tanChiShe">
		<img id="tanChiShe" :src="defaultSnakeUrl" alt="GitHub contribution snake" />
	</div>
</template>

<script>
	import { THEME_CONFIG } from "@/config/constants";

	export default {
		data() {
			return {
				defaultSnakeUrl: THEME_CONFIG.SNAKE_URL_TEMPLATE.replace(
					"{theme}",
					THEME_CONFIG.LIGHT
				),
			};
		},
	};
</script>

<style>
	.tanChiShe {
		width: 85%;
	}
	.tanChiShe img {
		width: 100%;
		height: 100%;
		/* object-fit: cover; */
	}
	@media (max-width: 800px) {
		.tanChiShe {
			width: 100%;
			transition: width 1s ease-in-out;
		}
	}
</style>

