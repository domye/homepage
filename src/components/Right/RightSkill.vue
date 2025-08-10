<template>
	<div class="skill">
		<img
			id="skillPc"
			src="https://skillicons.dev/icons?i=windows,ubuntu,vscode,java,js,spring,redis,mysql,html,css,js,vue,docker,git,github,nginx,md,nodejs,npm,ps,sublime,webpack,yarn,linux&perline=20"
		/>
		<img
			id="skillWap"
			src="https://skillicons.dev/icons?i=windows,ubuntu,vscode,java,js,spring,redis,mysql,html,css,js,vue,docker,git,github,nginx,md,nodejs,npm,ps,sublime,webpack,yarn,linux&perline=9"
		/>
	</div>
</template>

<script>
	export default {};
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
