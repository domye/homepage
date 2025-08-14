<template>
	<div class="left-div left-time" ref="container">
		<ul id="line" ref="timeline">
			<li
				v-for="(item, index) in times"
				:key="index"
				class="timeline-item"
				ref="items"
			>
				<div class="focus"></div>
				<div class="action">{{ item.action }}</div>
				<div class="date">—{{ item.date }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				times: [
					{ action: "搭建个人笔记Wiki", date: "2025.8.13" },
					{ action: "重构版主页上线", date: "2025.8.11" },
					{ action: "着手开始主页Vue化", date: "2025.8.09" },
					{ action: "更换博客主题为Handsome", date: "2025.7.16" },
					{ action: "开始写黑马点评项目", date: "2025.7.15" },
					{ action: "重新开始搭建博客", date: "2024.11.7" },
					{ action: "购入域名domye.top", date: "2022.7.4" },
				],
			};
		},
	};
</script>

<style>
	/* 添加渐显动画的关键帧 */
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/* 新增的.fade-in类，用于应用渐显动画 */
	.fade-in {
		animation: fadeIn 1s ease-in-out;
	}

	#line {
		width: 100%;
		max-height: 300px;
		font-size: 13px;
		padding-left: 8px;
		scroll-snap-type: y mandatory;
		overflow-y: auto;
	}
	.timeline-item {
		list-style: none;
		position: relative;
		padding: 10px 0px 0px 15px;
		border-left: 2px solid #d5d5d5;
		border-radius: 0;
		scroll-snap-align: end;
		color: var(--main_text_color);
		transition: all 0.3s ease;
		cursor: default;
		box-sizing: border-box;
	}
	.timeline-item:hover {
		background: rgba(95, 134, 131, 0.171);
		border-left: 2px solid #3faca38c;
	}
	.timeline-item:hover .action {
		color: #3faca3;
		font-weight: bold;
	}
	.timeline-item:hover .date {
		color: #888;
	}
	.focus {
		width: 8px;
		height: 8px;
		border-radius: 22px;
		background-color: rgb(255 255 255);
		border: 2px solid #fff;
		position: absolute;
		left: -5px;
		top: 30%;
		transition: all 0.3s ease;
	}
	.timeline-item:hover .focus {
		background-color: #3faca3;
		transform: scale(1.2);
	}
	.timeline-item:first-child .focus:first-child {
		background-color: #1d9187;
		left: -7px;
		width: 12px;
		height: 12px;
		animation: focus 1.8s ease infinite;
	}
	@keyframes focus {
		0% {
			box-shadow: 0 0 0 0 rgba(63, 172, 163, 0.4);
		}
		70% {
			box-shadow: 0 0 0 6px rgba(63, 172, 163, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(63, 172, 163, 0);
		}
	}
	#line::-webkit-scrollbar {
		display: none;
	}
	.date {
		margin-top: 5px;
		padding-bottom: 5px;
		text-align: right;
		font-size: 10px;
		color: #afafaf;
	}
</style>
