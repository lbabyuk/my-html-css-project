import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';

export default {
	plugins: [
		ViteImageOptimizer({
			png: {
				quality: 100,
			},
			jpeg: {
				quality: 100,
			},
			jpg: {
				quality: 80,
			},
			tiff: {
				quality: 100,
			},
			webp: {
				lossless: true,
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, './about/about.html'),
				blog: resolve(__dirname, './blog/blog.html'),
				contact: resolve(__dirname, './contact/contact.html'),
				error: resolve(__dirname, './error/error.html'),
				services: resolve(__dirname, './services/services.html'),
				serviceDetails: resolve(
					__dirname,
					'./services/serviceDetails.html'
				),
				portfolio: resolve(__dirname, './portfolio/portfolio.html'),
				portfolioDetails: resolve(
					__dirname,
					'./portfolio/portfolioDetails.html'
				),
				post: resolve(__dirname, './post/post.html'),
				postSidebar: resolve(__dirname, './post/postSidebar.html'),
			},
		},
	},
};
