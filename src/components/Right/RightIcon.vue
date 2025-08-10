<template>
	<div>
		<a
			class="iconItem"
			v-for="item in icon"
			:key="item.tip"
			target="_blank"
			:href="item.url"
		>
			<svg class="icon" :viewBox="item.box || '0 0 1024 1024'">
				<path :d="item.svg"></path>
			</svg>
			<div class="iconTip">{{ item.tip }}</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: {
			icon: Array,
		},
		data() {
			return {};
		},
	};
</script>

<style>
	.iconItem {
		width: 52px;
		height: 43px;
		box-sizing: border-box;
		border-radius: 7px;
		display: inline-flex;
		margin-left: 10px;
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		background: var(--item_bg_color);
		align-items: center;
		justify-content: center;
		transition: width 1s ease, opacity 1s ease, transform 1s ease;
		flex-shrink: 0;
	}

	.iconItem svg {
		width: 22px;
		height: 22px;
		fill: var(--fill);
		transition: margin-right 1s ease;
	}

	.iconTip {
		white-space: nowrap;
		display: none;
		opacity: 0;
		transform: translateY(-10px);
		transition: opacity 1s ease, transform 1s ease;
	}

	.iconItem:hover {
		width: 95px;
		transform: translateY(-2px);
		background: var(--item_hover_color);
	}

	.iconItem:hover svg {
		margin-right: 5px;
	}

	.iconItem:hover .iconTip {
		display: block;
		opacity: 1;
		transform: translateY(0);
	}
</style>
