<template>
	<a
		href="https://my.domye.top"
		class="logo"
		style="
			background-image: url(https://q1.qlogo.cn/g?b=qq&nk=1523610551&s=640);
		"
	></a>
</template>

<script>
	export default {};
</script>

<style>
	.container-left {
		overflow-y: scroll;
		width: 230px;
		height: 100vh;
		display: flex;
		padding: 0 15px;
		position: fixed;
		align-items: center;
		flex-direction: column;
	}
	.container-left::-webkit-scrollbar {
		display: none;
	}
	.logo {
		flex-shrink: 0;
		width: 65%;
		position: relative;
		aspect-ratio: 1/1;
		margin-top: 50px;
		background-size: cover;
		border-radius: 8%;
	}
</style>
