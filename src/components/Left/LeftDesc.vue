<template>
	<div class="left-div left-des">
		<div class="left-des-item" v-for="(item, index) in dec" :key="index">
			<svg class="icon" viewBox="0 0 1024 1024" width="256" height="256">
				<path :d="item.icon"></path>
			</svg>
			<a
				style="border-bottom: 1px solid rgba(125, 125, 125, 0.3)"
				target="_blank"
				onclick="return false;"
				href="#"
			>
				{{ item.dec }}
			</a>
		</div>
	</div>
</template>

<script>
	import svg from "@/assets/svg.json";
	export default {
		data() {
			return {
				dec: [
					{
						icon: svg.people,
						dec: "一个白日梦想家",
					},
					{
						icon: svg.doc,
						dec: "无限进步",
					},
				],
			};
		},
	};
</script>

<style scoped>
	.left-des {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.left-des-item {
		display: flex;
		align-items: center;
		line-height: 20px;
		font-size: 15px;
		margin-bottom: 5px;
		overflow: hidden;
	}

	.left-des-item svg {
		width: 16px;
		height: 16px;
		fill: var(--fill);
		font-size: 18px;
		margin-right: 10px;
	}
</style>
