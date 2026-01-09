<template>
	<div>
		<RightTitle :page="title"></RightTitle>
		<RightFaq></RightFaq>
	</div>
</template>

<script>
	import RightTitle from "@/components/Right/RightTitle.vue";
	import RightFaq from "@/components/Right/RightFaq.vue";
	import { PAGE_TITLES } from "@/config/constants";

	export default {
		components: { RightTitle, RightFaq },
		data() {
			return {
				title: PAGE_TITLES.FAQ,
			};
		},
	};
</script>

<style></style>
