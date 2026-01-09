<template>
	<div>
		<RightTitle :page="title"></RightTitle>
		<RightIntro></RightIntro>
	</div>
</template>

<script>
	import RightTitle from "@/components/Right/RightTitle.vue";
	import RightIntro from "@/components/Right/RightIntro.vue";
	import { PAGE_TITLES } from "@/config/constants";

	export default {
		components: { RightTitle, RightIntro },
		data() {
			return {
				title: PAGE_TITLES.ABOUT,
			};
		},
	};
</script>

<style></style>
