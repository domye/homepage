<template>
	<div>
		<!-- 项目列表 -->
		<div class="projectList">
			<a
				v-for="(item, index) in data"
				class="projectItem a"
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

		<!-- 底部弹窗 -->
		<div class="buttom-sheet" :class="{ show: isModalVisible }">
			<div class="sheet-overlay" @click="hideModal"></div>
			<div class="content">
				<div class="header">
					<div class="drag-icon" @mousedown="dragStart" @touchstart="dragStart">
						<span></span>
					</div>
				</div>
				<div class="body">
					<!-- 豆瓣风格布局 -->
					<div class="project-detail">
						<div class="detail-left">
							<img
								:src="currentItem.img"
								alt="项目封面"
								class="project-cover"
							/>
						</div>
						<div class="detail-right">
							<h2>{{ currentItem.title }}</h2>
							<div class="meta-info">
								<span v-if="currentItem.type" class="meta-item">
									{{ currentItem.type }}
								</span>
								<span v-if="currentItem.author" class="meta-item">
									{{ currentItem.author }}
								</span>
								<span v-if="currentItem.desc" class="meta-item">
									{{ currentItem.desc }}
								</span>
							</div>
							<div class="action-buttons">
								<a
									v-if="currentItem.link"
									:href="currentItem.link"
									class="project-link"
									target="_self"
									@click.stop
								>
									访问项目
								</a>
								<a
									v-if="currentItem.github"
									:href="currentItem.github"
									class="github-link"
									target="_self"
									@click.stop
								>
									GitHub仓库
								</a>
							</div>
						</div>
					</div>

					<!-- 详细描述 -->
					<div class="project-description" v-if="currentItem.content">
						<h3>简介</h3>
						<p
							v-for="(content, index) in currentItem.content.split('\n')"
							:key="index"
						>
							{{ content.trim() }}
						</p>
					</div>

					<!-- 技术栈 -->
					<div class="tech-stack" v-if="currentItem.tech">
						<h3>标签</h3>
						<div class="tech-tags">
							<span
								v-for="(tech, index) in currentItem.tech.split(',')"
								:key="index"
								class="tech-tag"
							>
								{{ tech.trim() }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: Array,
			page: Object,
		},
		data() {
			return {
				isModalVisible: false,
				isDragging: false,
				startY: 0,
				startHeight: 0,
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
				document.body.style.overflowY = "hidden";
				this.updateSheetHeight(60);
			},
			hideModal() {
				this.isModalVisible = false;
				document.body.style.overflowY = "auto";
			},
			updateSheetHeight(height) {
				const sheetContent = this.$el.querySelector(".content");
				if (sheetContent) {
					sheetContent.style.height = `${height}vh`;
					this.$el
						.querySelector(".buttom-sheet")
						.classList.toggle("fullscreen", height === 100);
				}
			},
			dragStart(e) {
				this.isDragging = true;
				this.startY = e.pageY || e.touches?.[0].pageY;
				const sheetContent = this.$el.querySelector(".content");
				this.startHeight = parseInt(sheetContent.style.height) || 60;
				this.$el.querySelector(".buttom-sheet").classList.add("dragging");
			},
			dragging(e) {
				if (!this.isDragging) return;
				const delta = this.startY - (e.pageY || e.touches?.[0].pageY);
				const newHeight = this.startHeight + (delta / window.innerHeight) * 100;
				this.updateSheetHeight(newHeight);
			},
			dragStop() {
				this.isDragging = false;
				this.$el.querySelector(".buttom-sheet").classList.remove("dragging");
				const sheetContent = this.$el.querySelector(".content");
				const sheetHeight = parseInt(sheetContent.style.height);

				if (sheetHeight < 25) {
					this.hideModal();
				} else if (sheetHeight > 75) {
					this.updateSheetHeight(100);
				} else {
					this.updateSheetHeight(60);
				}
			},
			openLink(url) {
				window.open(url, "_self");
			},
		},
		mounted() {
			document.addEventListener("mousemove", this.dragging);
			document.addEventListener("mouseup", this.dragStop);
			document.addEventListener("touchmove", this.dragging);
			document.addEventListener("touchend", this.dragStop);
		},
		beforeDestroy() {
			document.removeEventListener("mousemove", this.dragging);
			document.removeEventListener("mouseup", this.dragStop);
			document.removeEventListener("touchmove", this.dragging);
			document.removeEventListener("touchend", this.dragStop);
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
		.a {
			width: calc(50% - 20px);
			transition: width 1s ease-in-out;
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

	/* 底部弹窗样式 */
	.buttom-sheet {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		opacity: 0;
		pointer-events: none;
		align-items: center;
		flex-direction: column;
		justify-content: flex-end;
		transition: 0.1s linear;
		z-index: 100;
	}
	.buttom-sheet.show {
		opacity: 1;
		pointer-events: auto;
	}
	.buttom-sheet .sheet-overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		background: var(--item_bg_color);
	}

	.buttom-sheet .content {
		width: 100%;
		position: relative;
		background: var(--box_bg_color);
		backdrop-filter: blur(20px);
		max-height: 100vh;
		height: 60vh;
		max-width: 800px;
		padding: 25px 30px;
		transform: translateY(100%);
		border-radius: 15px 15px 0 0;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
		transition: 0.3s ease;
	}

	.buttom-sheet.show .content {
		transform: translateY(0%);
	}
	.buttom-sheet.dragging .content {
		transition: none;
	}
	.buttom-sheet.fullscreen .content {
		border-radius: 0;
		overflow-y: hidden;
	}
	.buttom-sheet .header {
		display: flex;
		justify-content: center;
	}
	.header .drag-icon {
		cursor: grab;
		user-select: none;
		padding: 15px;
		margin-top: -15px;
	}
	.header .drag-icon span {
		height: 4px;
		width: 40px;
		display: block;
		background: #c7d0e1;
		border-radius: 50px;
	}
	.buttom-sheet .body {
		height: 100%;
		overflow-y: auto;
		padding: 15px 0 40px;
		scrollbar-width: none;
	}
	.buttom-sheet .body::-webkit-scrollbar {
		width: 0;
	}

	/* 豆瓣风格弹窗内容 */
	.project-detail {
		display: flex;
		margin-bottom: 20px;
	}

	.detail-left {
		flex: 0 0 150px;
		margin-right: 30px;
		margin-left: 20px;
	}

	.project-cover {
		width: 100%;
		border-radius: 8px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.45);
		transition: transform 0.3s ease;
	}

	.project-cover:hover {
		transform: scale(1.02);
	}

	.detail-right {
		flex: 1;
	}

	.detail-right h2 {
		font-size: 24px;
		margin: 0 0 10px 0;
		color: #ffffff;
	}

	.meta-info {
		margin: 15px 0;
		color: #ffffff;
		font-size: 14px;
		line-height: 1.6;
	}

	.meta-item {
		display: inline-block;
		margin-right: 20px;
		position: relative;
	}

	.meta-item:not(:last-child):after {
		content: "•";
		position: absolute;
		right: -12px;
		top: 50%;
		transform: translateY(-50%);
		color: #ccc;
	}

	.action-buttons {
		display: flex;
		gap: 12px;
		margin-top: 20px;
	}

	.project-link,
	.github-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
		border-radius: 6px;
		text-decoration: none;
		font-size: 14px;
		/* font-weight: 500; */
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.project-link {
		background-color: #007bff93;
		color: white;
		border: 1px solid #007bff88;
	}

	.github-link {
		background-color: #f5f5f5;
		color: #333;
		border: 1px solid #ddd;
	}

	.project-link:hover {
		background-color: #0069d9;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
	}

	.github-link:hover {
		background-color: #e9e9e9;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.project-description {
		margin-top: 30px;
		padding-top: 20px;
		border-top: 1px solid #eee;
	}

	.project-description h3 {
		font-size: 18px;
		margin-bottom: 15px;
		color: #ffffff;
	}

	.project-description p {
		line-height: 1.8;
		color: #ffffff;
		font-size: 15px;
		margin: 0;
	}

	.tech-stack {
		margin-top: 25px;
		padding-top: 20px;
		border-top: 1px solid #eee;
	}

	.tech-stack h3 {
		font-size: 18px;
		margin-bottom: 15px;
		color: #ffffff;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tech-tag {
		background-color: #f0f0f0;
		color: #555;
		padding: 4px 12px;
		border-radius: 20px;
		font-size: 13px;
		transition: all 0.2s ease;
	}

	.tech-tag:hover {
		background-color: #e0e0e0;
		transform: translateY(-1px);
	}

	/* 响应式调整 */
	@media (max-width: 600px) {
		.project-detail {
			flex-direction: column;
		}

		.detail-left {
			margin-right: 0;
			margin-bottom: 20px;
			text-align: center;
		}

		.project-cover {
			max-width: 150px;
			margin: 0 auto;
		}

		.action-buttons {
			justify-content: center;
		}

		.buttom-sheet .content {
			padding: 20px 15px;
		}
	}
</style>
