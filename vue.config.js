const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		port: 35729,
		open: true,
		hot: true, //自动保存
		liveReload: true,
	},
});
