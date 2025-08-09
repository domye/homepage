<template>
	<div class="left-tag left-div">
		<ul>
			<li v-for="(item, index) in tag" :key="index" class="left-tag-item">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tag: [
					"大二",
					"码农",
					"全栈",
					"Java",
					"开发",
					"后端",
					"摄影",
					"摇滚",
					"R&B",
					"艺术",
					"指弹",
					"长发",
				],
			};
		},
	};
</script>

<style scoped>
	.left-tag ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.left-tag-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 28px;
		margin: 0px 5px 5px 0;
		padding: 10px;
		font-size: 13px;
		border-radius: 10px;
		background: var(--left_tag_item);
	}
</style>
