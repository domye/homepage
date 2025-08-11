<template>
	<div class="faq-container">
		<div
			v-for="(faq, index) in faqs"
			:key="index"
			class="faq-item"
			:class="{ active: faq.isActive }"
		>
			<div class="faq-question" @click="toggleFAQ(index)">
				<span>{{ faq.question }}</span>
				<svg class="faq-arrow" viewBox="0 0 24 24" width="20" height="20">
					<path fill="currentColor" d="M7 10l5 5 5-5z" />
				</svg>
			</div>
			<div class="faq-answer">
				<p v-html="faq.answer"></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				faqs: [
					{
						question: "你为什么会走上编程这条路？",
						answer: `因为<span class="highlight-text">热爱</span>吧，从小就对电子产品感兴趣，初中就搭建了自己的个人博客(可惜备份丢了)😭`,
						isActive: false,
					},
					{
						question: "接下来有什么计划？",
						answer: `继续精进<span class="highlight-text">前后端</span>技术，成为一个<span class="highlight-text">全栈</span>大牛，争取早日实现自己的理想✨`,
						isActive: false,
					},
					{
						question: "如何联系我？",
						answer: `可以联系我的邮箱: <span class="highlight-text">domye1@qq.com</span>`,
						isActive: false,
					},
					// 其他 FAQ 项
				],
			};
		},
		methods: {
			toggleFAQ(index) {
				this.faqs[index].isActive = !this.faqs[index].isActive;
			},
		},
	};
</script>

<style>
	.faq-container {
		margin: 20px 0;
	}

	.faq-item {
		background: var(--item_bg_color);
		border-radius: 12px;
		margin-bottom: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		transition: all 0.8s ease;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.faq-item:hover {
		background: var(--item_hover_color);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.faq-question {
		display: flex;
		font-size: 16px;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.8s ease;
		user-select: none;
	}

	.faq-question span {
		flex: 1;
		margin-right: 15px;
	}

	.faq-arrow {
		transition: transform 1s ease;
	}

	.faq-item.active .faq-arrow {
		transform: rotate(180deg);
	}

	.faq-answer {
		font-size: 14px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.5s ease, padding 0.5s ease;
	}

	.faq-item.active .faq-answer {
		max-height: 200px;
		padding: 0 20px 20px 20px;
	}

	.faq-answer p {
		margin: 0;
		line-height: 1.6;
		color: var(--item_left_text_color);
	}

	@media (max-width: 800px) {
		.button-container {
			margin: 20px 0;
			padding: 6px;
			gap: 8px;
		}
		.tab-button {
			padding: 10px 16px;
			font-size: 14px;
			min-height: 40px;
		}
		.faq-question {
			padding: 16px;
			font-size: 14px;
		}

		.faq-answer {
			font-size: 12px;
		}

		.faq-item.active .faq-answer {
			padding: 0 16px 16px 16px;
		}
	}
</style>
