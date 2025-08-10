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

<style>
	.title {
		display: flex;
		align-items: center;
		font-size: 22px;
		font-weight: 800;
		margin: 15px 0;
		transition: transform 0.4s ease;
		will-change: transform; /* 提升性能 */
	}
	.title svg {
		margin-right: 8px;
		height: 25px;
		width: 25px;
		fill: var(--fill);
	}
	.title:hover {
		transform: translateY(-5px);
	}
</style>
