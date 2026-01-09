const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	productionSourceMap: false, // 生产环境不生成source map
	devServer: {
		port: 35729,
		open: true,
		hot: true,
	},
	chainWebpack: config => {
		// 优化图片加载: 小于4kb的图片自动转为base64
		config.module
			.rule('images')
			.set('parser', {
				dataUrlCondition: {
					maxSize: 4096
				}
			})
	}
})
