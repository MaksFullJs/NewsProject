import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		visualizer({
			open: true,
			filename: "./dist/stats.html",
			template: "treemap",
		}),
		Inspect(),
		viteCompression({
			algorithm: "gzip",
			ext: ".gz",
			deleteOriginFile: false,
		}),
		checker({
			typescript: {
				tsconfigPath: "./tsconfig.app.json",
			},
			biome: {
				command: "check",
			},
			// overlay: {
			// 	initialIsOpen: true,
			// 	position: "tr",
			// },
		}),
		tailwindcss(),
	],
	build: {
		sourcemap: true,
		minify: "terser",
	},
});
