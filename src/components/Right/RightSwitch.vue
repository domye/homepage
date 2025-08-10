<template>
	<a class="switch" href="javascript:void(0)">
		<div class="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				class="onoffswitch-checkbox"
				id="myonoffswitch"
				v-model="themeState"
				@change="toggleTheme"
			/>
			<label class="onoffswitch-label" for="myonoffswitch">
				<span class="onoffswitch-inner"></span>
				<span class="onoffswitch-switch"></span>
			</label>
		</div>
	</a>
</template>

<script>
	export default {
		data() {
			return {
				themeState: JSON.parse(sessionStorage.getItem("themeState")) ?? true,
			};
		},
		mounted() {
			this.applyTheme();
		},
		methods: {
			toggleTheme() {
				sessionStorage.setItem("themeState", JSON.stringify(this.themeState));
				this.applyTheme();
			},
			applyTheme() {
				const themeName = this.themeState ? "Light" : "Dark";

				// 更新蛇形图
				const tanChiShe = document.getElementById("tanChiShe");
				if (tanChiShe) {
					tanChiShe.src = `https://hub.gitmirror.com/https://raw.githubusercontent.com/domye/domye/output/github-contribution-grid-snake-${themeName}.svg`;
				}

				// 设置主题属性
				document.documentElement.setAttribute("data-theme", themeName);

				// 更新背景
				document.documentElement.style.setProperty(
					"--main_bg_color",
					themeName === "Light"
						? "url(https://cdn.domye.top/uploads/07/1753247356.webp)"
						: "#000000"
				);
			},
		},
	};
</script>
<style>
	.switch {
		width: 55px;
		height: 43px;
		box-sizing: border-box;
		border-radius: 7px;
		display: flex;
		margin-left: 10px;
		backdrop-filter: blur(var(--card_filter));
		-webkit-backdrop-filter: blur(var(--card_filter));
		background: var(--item_bg_color);
		align-items: center;
		justify-content: center;
		transition: width 2s ease, opacity 2s ease, transform 2s ease;
		flex-shrink: 0;
	}

	.switch:hover {
		width: 55px;
		/* transform: translateY(-2px);
    */
		background: var(--item_hover_color);
	}

	.onoffswitch {
		position: relative;
		width: 38px;
		height: 20px;
	}
	.onoffswitch-checkbox {
		display: none;
	}
	.onoffswitch-label {
		display: block;
		overflow: hidden;
		cursor: pointer;
		height: 100%;
		border-radius: 50px;
	}
	.onoffswitch-inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200%;
		height: 100%;
		margin-left: -100%;
		transition: margin 0.2s ease-in 0s;
	}
	.onoffswitch-inner:before,
	.onoffswitch-inner:after {
		display: flex;
		justify-content: center;
		align-items: center;
		float: left;
		width: 50%;
		height: 100%;
		padding: 0;
		font-size: 12px;
		color: white;
		font-family: Trebuchet, Arial, sans-serif;
		font-weight: bold;
		box-sizing: border-box;
	}
	.onoffswitch-inner:before {
		content: "";
		background-color: rgb(110 110 110 / 50%);
		color: #ffffff;
		text-align: left;
	}
	.onoffswitch-inner:after {
		content: "";
		background-color: #272727;
		color: #fafafa;
		text-align: right;
	}
	.onoffswitch-switch {
		display: block;
		height: 70%;
		aspect-ratio: 1/1;
		background: #ffffff;
		position: absolute;
		top: 12.5%;
		bottom: 12.5%;
		right: 5px;
		border-radius: 20px;
		transition: right 0.2s ease-in 0s;
	}
	.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
		margin-left: 0;
	}
	.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
		right: 50%;
	}
</style>
