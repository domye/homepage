<template>
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
		width: 100%;
	}
	.projectItem {
		margin: 7px;
		display: flex;
		background-color: var(--item_bg_color);
		border-radius: 8px;
		padding: 15px;
		height: 100px;
		width: calc(25% - 15px);
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter)); /* 只需要一个 */
		transition: all 0.3s ease; /* 简化过渡，注意：这里all可能会包含不必要属性，最好指定 */
		will-change: transform; /* 提升动画性能 */
	}
	/* 指定具体的过渡属性 */
	.projectItem {
		transition: opacity 0.3s ease, background-color 0.3s ease,
			box-shadow 0.3s ease,
			/* 注意：原来没有box-shadow的过渡，现在添加 */ transform 0.3s ease;
	}
	.projectItem:hover {
		box-shadow: 0 8px 16px -4px rgba(44, 45, 48, 0.05); /* 修正颜色值，原为0c，改为透明度 */
		transform: translateY(-2px);
	}
	.projectItem.pressed {
		transform: scale(0.9);
		background-color: var(--item_hover_color);
	}
	/* 移除宽度改变的动画 */
	.projectItemLeft {
		/* 过渡效果中去掉width */
		height: 100%;
		width: 80%; /* 因为右侧绝对定位，所以左侧直接100% */
		transition: none; /* 因为我们不再改变宽度，所以移除过渡 */
	}
	.projectItemRight {
		position: absolute;
		right: 15px; /* 与.projectItem的padding一致 */
		top: 50%;
		transform: translateY(-50%); /* 垂直居中 */
		transition: opacity 0.4s ease, transform 0.4s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 39px; /* 图片大小 */
		height: 39px;
	}
	.projectItemRight img {
		height: 39px;
		width: 39px;
		transition: transform 0.4s ease; /* 图片旋转过渡 */
	}
	/* 悬停时，右侧部分消失并向右移动 */
	.projectItem:hover .projectItemRight {
		opacity: 0;
		transform: translateY(-50%) translateX(20px); /* 保持垂直居中，水平向右移动 */
	}
	/* 悬停时图片旋转 */
	.projectItem:hover .projectItemRight img {
		transform: rotate(40deg);
	}
	/* 移除标题字体大小的变化 */
	.projectItemLeft h1 {
		display: block;
		margin-top: 6px;
		font-weight: normal;
		font-size: 18px;
		/* 不再改变字体大小 */
		color: var(--item_left_title_color);
	}
	.projectItemLeft p {
		font-size: 12px;
		margin-top: 15px;
		color: var(--item_left_text_color);
	}

	@media (max-width: 1150px) {
		.projectItem {
			margin: 10px;
			transition: margin 1s ease-in-out; /* 添加过渡动画 */
		}

		.a {
			width: calc(50% - 20px);
			transition: width 1s ease-in-out; /* 添加过渡动画 */
		}
	}

	@media (max-width: 800px) {
		.projectItem {
			padding: 10px;
			transition: padding 1s ease-in-out;
		}

		.a {
			height: 110px;
			margin: 8px 15px;
			width: calc(100% - 30px);
			transition: height 1s ease-in-out, margin 1s ease-in-out,
				width 1s ease-in-out;
		}
		.projectItemLeft p {
			font-size: 13px;
			margin-left: 5px;
			transition: font-size 1s ease-in-out;
		}

		.projectItemLeft h1 {
			font-size: 18px;
			margin-top: 10px;
			margin-left: 5px;
			transition: font-size 1s ease-in-out;
		}

		.projectItem:hover h1 {
			font-size: 20px;

			transition: font-size 1s ease-in-out;
		}
	}
</style>
