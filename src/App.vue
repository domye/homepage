<template>
	<div id="app">
		<TopSection></TopSection>
	</div>
</template>

<script>
	import TopSection from "./components/LeftLogo.vue";
	export default {
		name: "App",
		components: {
			TopSection,
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		transition: background-color 0.2s ease;
		font-family: "Douyin Sans";
		word-wrap: break-word;
	}
</style>
