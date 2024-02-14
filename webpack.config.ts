import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
	entry: "./src/index.ts",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new webpack.ProgressPlugin(),
	],
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(ts)x?$/,
				use: {
					loader: "ts-loader",
					options: {
						compilerOptions: {
							noEmit: false, // this option will solve the issue
						},
					},
				},
				exclude: /node_modules|\.d\.ts$/,
			},
		],
	},
	resolve: {
		extensions: ["jsx", ".tsx", ".ts", ".js"],
	},
};

export default config;
