

 import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import {defineConfig} from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
	server: {
		port: 3000,
	},
	build: {
		minify: 'terser',
		cssCodeSplit: true,
	},
});


//
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/test/setup.ts',
//   },
// });
