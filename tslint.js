// rules for Angular only. Another Typescript rules are handled by ESLint (.eslintrc.js)

const codelyzer = require('./config/eslint/codelyzer.config');

module.exports = {
	extends: ['tslint-angular', 'tslint-config-prettier'],
	linterOptions: {
		exclude: [
			'.awcache',
			'.sourcemaps',
			'config',
			'coverage',
			'dist',
			'etc',
			'mobile/resources',
			'node',
			'node_modules',
			'platforms',
			'plugins',
			'resources',
			'shared/assets',
			'web/dependencies',
			'www',
			'package-lock.json'
		]
	},
	rules: {
		...codelyzer.rules
	}
};
