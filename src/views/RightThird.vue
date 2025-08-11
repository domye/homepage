<template>
	<div>
		<right-title :page="title"></right-title>
		<right-faq></right-faq>
	</div>
</template>

<script>
	import RightTitle from "@/components/Right/RightTitle.vue";
	import svg from "@/assets/svg";
	import RightFaq from "@/components/Right/RightFaq.vue";
	export default {
		components: { RightTitle, RightFaq },
		data() {
			return {
				title: {
					title: "FAQ",
					svg: svg.content,
				},
			};
		},
	};
</script>

<style></style>
