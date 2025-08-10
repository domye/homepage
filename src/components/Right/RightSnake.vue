<template>
	<div class="tanChiShe">
		<img
			id="tanChiShe"
			src="https://hub.gitmirror.com/https://raw.githubusercontent.com/domye/domye/output/github-contribution-grid-snake-Light.svg"
			alt=""
		/>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.tanChiShe {
		width: 85%;
	}
	.tanChiShe img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (max-width: 800px) {
		.tanChiShe {
			width: 100%;
			transition: width 1s ease-in-out;
		}
	}
</style>
