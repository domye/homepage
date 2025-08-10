<template>
	<div>
		<div class="welcome">
			Hello, I'm
			<span class="gradientText">Domye</span>
		</div>
		<div class="description">
			🌱 一名热爱技术，在校
			<span class="textBackground">物联网</span>
			专业的学生
		</div>
		<div class="description">
			📝 喜欢分享技术，乐于结交朋友。循光而行，永远热泪盈眶，永远相信梦想！
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.gradientText {
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 200%;
		background-position: 0%;
		animation: backgroundSizeAnimation 5s ease-in-out infinite;
		background-image: linear-gradient(
			120deg,
			var(--gradient-start, #8188c2),
			var(--gradient-middle, #538c9b) 30%,
			var(--gradient-end, #7ab6ac) 60%
		);
	}
	.welcome {
		font-size: 50px;
		font-weight: 800;
		margin: 20px 0;
	}
	.description {
		font-size: 20px;
		margin-top: 7px;
	}
	.textBackground {
		background: #8bc2b7;
		border-radius: 5px;
		padding: 3px 5px;
		color: #ffffff;
		font-weight: 1000;
	}

	@media (max-width: 800px) {
		.description {
			font-size: 4vw;
			transition: font-size 1s ease-in-out;
		}

		.welcome {
			font-size: 8vw;
			margin: 2vw 0;
			transition: font-size 1s ease-in-out, margin 1s ease-in-out;
		}
	}
</style>
