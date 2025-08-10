<template>
	<div>
		<div class="projectList">
			<a
				v-for="(item, index) in data"
				class="projectItem a"
				target="_self"
				:href="item.url"
				:key="index"
			>
				<div class="projectItemLeft">
					<h1>{{ item.title }}</h1>
					<p>{{ item.desc }}</p>
				</div>
				<div class="projectItemRight">
					<img :src="item.img" alt="" />
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: Array,
			page: Object,
		},
	};
</script>

<style>
	.projectList {
		display: flex;
		flex-wrap: wrap;
	}
	.title {
		display: flex;
		align-items: center;
		font-size: 22px;
		font-weight: 800;
		margin: 15px 0;
		transition: transform 0.4s ease;
	}
	.title svg {
		margin-right: 8px;
		height: 25px;
		width: 25px;
		fill: var(--fill);
	}
	.title:hover {
		transform: translateY(-5px);
	}
	.projectItem {
		margin: 7px;
		display: flex;
		background-color: var(--item_bg_color);
		border-radius: 8px;
		padding: 15px;
		height: 95px;
		width: calc(25% - 15px);
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		transition: opacity 0.3s ease, background-color 0.3s ease, border 0.3s ease,
			transform 0.2s ease;
	}
	.projectItem {
		display: flex;
		background-color: var(--item_bg_color);
		border-radius: 8px;
		padding: 15px;
		height: 100px;
		width: calc(25% - 15px);
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		transition: opacity 0.5s ease, background-color 0.2s ease, border 0.2s ease,
			transform 0.3s ease;
	}
	.projectItem:hover {
		box-shadow: 0 8px 16px -4px #2c2d300c;
		transform: translateY(-2px);
	}
	.projectItem.pressed {
		transform: scale(0.9);
		/* 缩小到原来的0.9倍 */
		background-color: var(--item_hover_color);
	}
	.projectItem:hover .projectItemLeft {
		width: 100%;
	}
	.projectItem:hover .projectItemRight {
		width: 0%;
	}
	.projectItem:hover .projectItemRight img {
		transform: rotate(40deg);
	}
	.projectItem:hover h1 {
		font-size: 18px;
	}
	.projectItemLeft p {
		font-size: 12px;
		margin-top: 15px;
		color: var(--item_left_text_color);
	}
	.projectItemLeft h1 {
		font-weight: normal;
		font-size: 16px;
		margin: 0px;
		transition: font-size 0.4s ease;
		color: var(--item_left_title_color);
	}
	.projectItemLeft {
		transition: width 0.4s ease;
		height: 100%;
		width: 80%;
	}
	.projectItemRight {
		overflow: hidden;
		transition: width 0.4s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20%;
		height: 100%;
	}
	.projectItemRight img {
		height: 39px;
		width: 39px;
	}
</style>
