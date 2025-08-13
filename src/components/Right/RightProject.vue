<template>
	<div>
		<!-- 项目列表 -->
		<div class="projectList">
			<a
				v-for="(item, index) in data"
				class="projectItem"
				href="javascript:void(0);"
				@click="showModal(item)"
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

		<!-- 底部弹窗组件 -->
		<keep-alive>
			<BottomSheetModal
				:item="currentItem"
				:is-visible="isModalVisible"
				@update:isVisible="isModalVisible = $event"
			/>
		</keep-alive>
	</div>
</template>

<script>
	const BottomSheetModal = () => import("./BottomSheetModal.vue");
	export default {
		components: {
			BottomSheetModal,
		},
		props: {
			data: Array,
			page: Object,
		},
		data() {
			return {
				isModalVisible: false,
				currentItem: {
					title: "",
					content: "",
					img: "",
					type: "",
					author: "",
					desc: "",
					link: "",
					github: "",
					tech: "",
				},
			};
		},
		methods: {
			showModal(item) {
				this.currentItem = {
					title: item.title || "",
					content: item.intro || "",
					img: item.img || "",
					type: item.type || "",
					author: item.author || "",
					desc: item.desc || "",
					link: item.url || "",
					github: item.github || "",
					tech: item.tag || "",
				};
				this.isModalVisible = true;
			},
		},
	};
</script>

<style scoped>
	/* 项目列表样式 */
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
		-webkit-backdrop-filter: blur(var(--card_filter));
		transition: opacity 0.3s ease, background-color 0.3s ease,
			box-shadow 0.3s ease, transform 0.3s ease;
		will-change: transform;
	}
	.projectItem:hover {
		box-shadow: 0 8px 16px -4px rgba(44, 45, 48, 0.05);
		transform: translateY(-2px);
	}
	.projectItem.pressed {
		transform: scale(0.9);
		background-color: var(--item_hover_color);
	}
	.projectItemLeft {
		height: 100%;
		width: 80%;
	}
	.projectItemRight {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		transition: opacity 0.4s ease, transform 0.4s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 39px;
		height: 39px;
	}
	.projectItemRight img {
		height: 39px;
		width: 39px;
		transition: transform 0.4s ease;
	}
	.projectItem:hover .projectItemRight {
		opacity: 0;
		transform: translateY(-50%) translateX(20px);
	}
	.projectItem:hover .projectItemRight img {
		transform: rotate(40deg);
	}
	.projectItemLeft h1 {
		display: block;
		margin-top: 6px;
		font-weight: normal;
		font-size: 18px;
		color: var(--item_left_title_color);
	}
	.projectItemLeft p {
		font-size: 12px;
		margin-top: 15px;
		color: var(--item_left_text_color);
	}

	/* 响应式设计 */
	@media (max-width: 1150px) {
		.projectItem {
			margin: 10px;
			transition: margin 1s ease-in-out;
		}
		.projectItem {
			width: calc(50% - 20px);
			transition: width 1s ease-in-out;
		}
	}
	@media (max-width: 800px) {
		.projectItem {
			padding: 10px;
			transition: padding 1s ease-in-out;
		}
		.projectItem {
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
