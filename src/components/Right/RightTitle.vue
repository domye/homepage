<template>
	<div class="title">
		<svg class="icon" width="256" height="256" viewBox="0 0 1024 1024">
			<path :d="page.svg" fill="#FFFFFF"></path>
		</svg>
		{{ page.title }}
	</div>
</template>

<script>
	export default {
		props: {
			page: Object,
		},
	};
</script>

<style></style>
