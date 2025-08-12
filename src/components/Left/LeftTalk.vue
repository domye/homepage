<template>
	<div class="left-dynamic left-div">
		<h3 class="dynamic-title">最近动态</h3>
		<ul class="dynamic-list">
			<li v-for="(item, index) in dynamics" :key="index" class="dynamic-item">
				<div class="dynamic-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="#fff"
						viewBox="0 0 16 16"
					>
						<path :d="item.icon" />
					</svg>
				</div>
				<div class="dynamic-content-wrapper">
					<div class="dynamic-content">{{ item.content }}</div>
					<div class="dynamic-time">{{ formatTime(item.time) }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import svg from "@/assets/talksvg.json";
	export default {
		data() {
			return {
				dynamics: [
					{ content: "成功完成交付", time: "2025-08-11", icon: svg.envelope },
					{
						content:
							"测试测试测测试测试测测试测试测测试测试测测试测试测测试测试测测试测试测",
						time: "2025-05-18",
						icon: svg.info,
					},
					{ content: "xxxxxxxx", time: "2025-05-15", icon: svg.info },
					{ content: "xxxxxxx", time: "2025-05-10" },
					{ content: "xxxxxxx", time: "2023-05-01" },
				],
			};
		},
		methods: {
			formatTime(timeStr) {
				const now = new Date();
				const time = new Date(timeStr);
				const diffDays = Math.floor((now - time) / (1000 * 60 * 60 * 24));

				if (diffDays === 0) {
					return "今天";
				} else if (diffDays === 1) {
					return "昨天";
				} else if (diffDays === 2) {
					return "前天";
				} else {
					return `${diffDays}天前`;
				}
			},
		},
	};
</script>

<style scoped>
	.dynamic-title {
		margin: 0 0 15px 0;
		font-size: 18px;
		color: var(--text_color);
	}

	.dynamic-list {
		list-style: none;
		padding: 0;
		margin: 0;
		max-height: 200px;
		overflow-y: auto;
	}

	.dynamic-item {
		padding: 10px 0;
		border-bottom: 1px solid var(--border_color);
		display: flex;
		align-items: flex-start;
		justify-content: space-between; /* 修改这里 */
		gap: 10px;
	}

	.dynamic-item:last-child {
		border-bottom: none;
	}

	.dynamic-icon {
		color: var(--secondary_text_color);
		margin-top: 2px;
	}

	.dynamic-icon svg {
		display: block;
	}

	.dynamic-content-wrapper {
		flex: 1;
		display: flex; /* 增加这里 */
		flex-direction: column; /* 增加这里 */
		justify-content: space-between; /* 增加这里 */
	}

	.dynamic-content {
		font-size: 12px;
		color: var(--text_color);
		margin-bottom: 5px;
	}

	.dynamic-time {
		font-size: 4px;
		color: rgba(255, 255, 255, 0.521);
		/* 如果需要进一步调整时间的位置，可以在 .dynamic-time 上添加 align-self: flex-end; */
		align-self: flex-end; /* 增加这里 */
	}
</style>
