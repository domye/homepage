<template>
	<div>
		<a
			class="iconItem"
			v-for="item in icon"
			:key="item.tip"
			target="_blank"
			rel="noopener noreferrer"
			:href="item.url"
			:title="item.tip"
			:aria-label="item.tip"
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
			icon: {
				type: Array,
				default: () => [],
			},
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
		transition: width 0.5s ease, opacity 0.5s ease, transform 0.5s ease; /* 优化过渡时间 */
		flex-shrink: 0;
	}

	.iconItem svg {
		width: 22px;
		height: 22px;
		fill: var(--fill);
		transition: margin-right 0.5s ease; /* 优化过渡时间 */
	}

	.iconTip {
		white-space: nowrap;
		/* 跟随横向展开“慢慢揭开”，不做上下位移/回弹 */
		display: inline-block;
		max-width: 0;
		overflow: hidden;
		opacity: 0;
		transition: max-width 0.5s ease, opacity 1s linear;
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
		max-width: 80px;
		opacity: 1;
	}
</style>
