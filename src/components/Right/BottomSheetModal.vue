<template>
	<div class="buttom-sheet" :class="{ show: isVisible, dragging: isDragging }">
		<div class="sheet-overlay" @click="hide"></div>
		<div class="content" :style="{ height: `${currentHeight}vh` }">
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
							:src="item.img"
							alt="项目封面"
							class="project-cover"
							decoding="async"
							loading="lazy"
						/>
					</div>
					<div class="detail-right">
						<h2>{{ item.title }}</h2>
						<div class="meta-info">
							<span v-if="item.type" class="meta-item">
								{{ item.type }}
							</span>
							<span v-if="item.author" class="meta-item">
								{{ item.author }}
							</span>
							<span v-if="item.desc" class="meta-item">
								{{ item.desc }}
							</span>
						</div>
						<div class="action-buttons">
							<a
								v-if="item.link"
								:href="item.link"
								class="project-link"
								target="_blank"
								rel="noopener noreferrer"
								@click.stop
							>
								访问项目
							</a>
							<a
								v-if="item.github"
								:href="item.github"
								class="github-link"
								target="_blank"
								rel="noopener noreferrer"
								@click.stop
							>
								GitHub仓库
							</a>
						</div>
					</div>
				</div>

				<!-- 详细描述 -->
				<div class="project-description" v-if="item.content">
					<h3>简介</h3>
					<p v-for="(content, index) in item.content.split('\n')" :key="index">
						{{ content.trim() }}
					</p>
				</div>

				<!-- 技术栈 -->
				<div class="tech-stack" v-if="item.tech">
					<h3>标签</h3>
					<div class="tech-tags">
						<span
							v-for="(tech, index) in item.tech.split(',')"
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
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true,
				default: () => ({
					title: "",
					content: "",
					img: "",
					type: "",
					author: "",
					desc: "",
					link: "",
					github: "",
					tech: "",
				}),
			},
			isVisible: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				defaultHeight: 60,
				isDragging: false,
				startY: 0,
				startHeight: 60,
				currentHeight: 60,
			};
		},
		watch: {
			isVisible(newVal) {
				if (newVal) {
					this.resetHeight();
					document.body.style.overflowY = "hidden";
				} else {
					document.body.style.overflowY = "auto";
				}
			},
			item() {
				// keep-alive 场景：弹窗不关闭但内容切换时，也需要回到默认高度
				if (this.isVisible) this.resetHeight();
			},
		},
		methods: {
			resetHeight() {
				this.startHeight = this.defaultHeight;
				this.currentHeight = this.defaultHeight;
			},
			hide() {
				this.resetHeight();
				this.$emit("update:isVisible", false);
			},
			dragStart(e) {
				this.isDragging = true;
				this.startY = e.pageY || e.touches?.[0].pageY;
				this.startHeight = this.currentHeight;
			},
			dragging(e) {
				if (!this.isDragging) return;
				const delta = this.startY - (e.pageY || e.touches?.[0].pageY);
				this.currentHeight = Math.min(
					100,
					Math.max(0, this.startHeight + (delta / window.innerHeight) * 100)
				);
			},
			dragStop() {
				if (!this.isDragging) return;
				this.isDragging = false;

				if (this.currentHeight < 25) {
					this.hide();
				} else if (this.currentHeight > 75) {
					this.currentHeight = 100;
				} else {
					this.resetHeight();
				}
			},
			rafThrottle(func) {
				let rafId = null;
				return function () {
					if (rafId) return;
					const context = this;
					const args = arguments;
					rafId = requestAnimationFrame(() => {
						rafId = null;
						func.apply(context, args);
					});
				};
			},
		},

		mounted() {
			const throttledDrag = this.rafThrottle(this.dragging);
			document.addEventListener("mousemove", throttledDrag);
			document.addEventListener("mouseup", this.dragStop);
			document.addEventListener("touchmove", throttledDrag, { passive: true });
			document.addEventListener("touchend", this.dragStop);

			// 清理函数
			this.$once("hook:beforeDestroy", () => {
				document.removeEventListener("mousemove", throttledDrag);
				document.removeEventListener("mouseup", this.dragStop);
				document.removeEventListener("touchmove", throttledDrag);
				document.removeEventListener("touchend", this.dragStop);
			});
		},
	};
</script>

<style scoped>
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
		transition: transform 0.3s ease-out, opacity 0.1s linear;
	}
	.buttom-sheet.show .content {
		transform: translateY(0%);
		opacity: 1;
	}
	.buttom-sheet.dragging .content {
		transition: none;
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
		margin-left: 10px;
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
		transition: transform 0.3s ease, box-shadow 0.3s ease,
			background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
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
		transition: transform 0.2s ease-out, background-color 0.2s ease-out,
			box-shadow 0.2s ease-out;
	}
	.tech-tag:hover {
		background-color: #e0e0e0;
		transform: translateY(-1px) scale(1.05);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
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
