<template>
	<div class="container-right">
		<right-dec></right-dec>
	</div>
</template>

<script>
	import RightDec from "./Right/RightDec.vue";
	export default {
		components: { RightDec },
	};
</script>

<style>
	.container-right {
		width: calc(100% - 230px);
		display: flex;
		padding: 20px;
		position: relative;
		float: right;
		padding-bottom: 50px;
		flex-direction: column;
	}
</style>
