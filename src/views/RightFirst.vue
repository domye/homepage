<template>
	<div>
		<RightTitle :page="title[0]" />
		<RightProject :data="website" />
		<RightTitle :page="title[1]" />
		<RightProject :data="project" />
		<RightTitle :page="title[2]" />
		<RightSkill />
	</div>
</template>

<script>
	import RightProject from "@/components/Right/RightProject.vue";
	import RightTitle from "@/components/Right/RightTitle.vue";
	import RightSkill from "@/components/Right/RightSkill.vue";
	import { websiteData, projectData } from "@/config/data";
	import { PAGE_TITLES } from "@/config/constants";

	export default {
		components: {
			RightProject,
			RightTitle,
			RightSkill,
		},
		data() {
			return {
				title: [PAGE_TITLES.WEBSITE, PAGE_TITLES.PROJECT, PAGE_TITLES.SKILL],
				website: websiteData,
				project: projectData,
			};
		},
	};
</script>

<style></style>
