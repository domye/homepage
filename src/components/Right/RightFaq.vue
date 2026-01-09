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
	import { faqData } from "@/config/data";

	export default {
		data() {
			return {
				faqs: faqData,
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
		transition: background-color 0.4s ease, box-shadow 0.4s ease,
			border-color 0.4s ease, transform 0.4s ease;
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
		transition: color 0.4s ease;
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
