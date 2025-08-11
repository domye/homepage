<template>
	<div class="button-container">
		<router-link to="/" class="tab-button">项目</router-link>
		<router-link to="/content" class="tab-button">关于</router-link>
		<router-link to="/faq" class="tab-button">常见问题</router-link>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.button-container {
		display: flex;
		gap: 12px;
		margin: 30px 0;
		align-items: center;
		padding: 8px;
		background: var(--item_bg_color);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.tab-button::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0px;
		height: 3px;
		background: #ffffffa4;
		transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
		transform: translateX(-50%);
	}

	.router-link-exact-active::after {
		width: calc(30%);
	}

	.router-link-exact-active {
		color: white;
	}
	.tab-button {
		flex: 1;
		padding: 12px 24px;
		border: none;
		border-radius: 12px;
		background: transparent;
		color: var(---item_left_text_color);
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		min-height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		-webkit-tap-highlight-color: transparent;
	}

	.tab-button:not(.router-link-exact-active):hover {
		background: #afa9a923;
	}

	.router-link-exact-active {
		color: white;
	}

	.router-link-exact-active::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		pointer-events: none;
	}
</style>
