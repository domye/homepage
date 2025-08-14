<template>
	<div v-if="showPopup" class="notification">
		<div class="notification-content">
			<p>欢迎这位小伙伴访问我的网站✨</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "WelcomeNotification",
		data() {
			return {
				showPopup: false,
			};
		},
		mounted() {
			// 检查是否已经显示过通知（使用localStorage）
			const hasSeenPopup = false; //localStorage.getItem("hasSeenWelcomePopup");

			if (!hasSeenPopup) {
				// 延迟显示，确保页面加载完成
				setTimeout(() => {
					this.showPopup = true;
					// 标记为已显示
					localStorage.setItem("hasSeenWelcomePopup", "true");

					// 3秒后自动消失
					setTimeout(() => {
						this.showPopup = false;
					}, 5000);
				}, 1000);
			}
		},
	};
</script>

<style scoped>
	.notification {
		position: fixed;
		right: 20px;
		max-width: 300px;
		background-color: #5d7586ea;
		color: white;
		padding: 12px 16px;
		border-radius: 4px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		z-index: 1000;
		animation: slideIn 0.5s, fadeOut 0.5s 2.5s forwards;
		transform: translateX(0);
	}

	/* PC端样式 - 右上角显示 */
	@media (min-width: 769px) {
		.notification {
			top: 20px;
		}
	}

	.notification-content p {
		margin: 0;
		font-size: 14px;
		line-height: 1.4;
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	/* 移动端样式 - 底部显示 */
	@media (max-width: 768px) {
		.notification {
			bottom: 20px;
			right: 10px;
			left: 10px;
			max-width: calc(70% - 20px);
			padding: 10px 14px;
			margin: 0 auto;
			animation: slideUp 0.5s, fadeOut 0.5s 2.5s forwards;
		}

		.notification-content p {
			font-size: 13px;
			text-align: center;
		}

		@keyframes slideUp {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}
	}
</style>
