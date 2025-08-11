<template>
	<div class="left-div left-time">
		<ul id="line">
			<li v-for="(item, index) in times" :key="index">
				<div class="focus"></div>
				<div>{{ item.action }}</div>
				<div>{{ item.date }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				times: [
					{ action: "重构版主页上线", date: "2025.8.11" },
					{ action: "着手开始主页Vue化", date: "2025.8.09" },
					{ action: "更换博客主题为Handsome", date: "2025.7.16" },
					{ action: "着手开始写黑马点评项目", date: "2025.7.15" },
					{ action: "重新开始搭建博客", date: "2024.11.7" },
					{ action: "购入域名domye.top", date: "2022.7.4" },
				],
			};
		},
	};
</script>

<style>
	#line {
		width: 100%;
		max-height: 700px;
		font-size: 13px;
		padding-left: 8px;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}
	#line li {
		list-style: none;

		position: relative;
		padding: 15px 0px 0px 15px;
		border-left: 2px solid #d5d5d5;
		border-radius: 0;
		scroll-snap-align: end;
		color: var(--main_text_color);
	}
	.focus {
		width: 8px;
		height: 8px;
		border-radius: 22px;
		background-color: rgb(255 255 255);
		border: 2px solid #fff;
		position: absolute;
		left: -5px;
		top: 50%;
	}
	#line li:first-child .focus:first-child {
		background-color: #aaffcd;
		animation: focus 1.8s ease infinite;
	}
	#line::-webkit-scrollbar {
		display: none;
	}
</style>
