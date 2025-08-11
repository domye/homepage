<template>
	<div>
		<right-title :page="title"></right-title>
		<right-intro></right-intro>
	</div>
</template>

<script>
	import RightTitle from "@/components/Right/RightTitle.vue";
	import svg from "@/assets/svg";
	import RightIntro from "@/components/Right/RightIntro.vue";
	export default {
		components: { RightTitle, RightIntro },
		data() {
			return {
				title: {
					title: "About",
					svg: svg.content,
				},
			};
		},
	};
</script>

<style></style>
