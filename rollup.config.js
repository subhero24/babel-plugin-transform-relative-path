import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: {
		file: 'build/index.js',
		format: 'es',
	},
	plugins: [babel()],
	external: ['slash', 'path'],
};