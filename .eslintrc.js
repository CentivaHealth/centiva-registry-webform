// airbnb-base rules
const bestPractices = require('./config/eslint/airbnb-base-config/best-practices');
const errors = require('./config/eslint/airbnb-base-config/errors');
const es6 = require('./config/eslint/airbnb-base-config/es6');
const imports = require('./config/eslint/airbnb-base-config/imports');
const node = require('./config/eslint/airbnb-base-config/node');
const strict = require('./config/eslint/airbnb-base-config/strict');
const style = require('./config/eslint/airbnb-base-config/style');
const variables = require('./config/eslint/airbnb-base-config/variables');

const angularConfig = require('./config/eslint/angular.config');
const prettierConfig = require('./prettier.config');
const typescriptConfig = require('./config/eslint/typescript-eslint.config');

module.exports = {
	root: true,
	extends: [
		'airbnb-base',
		'plugin:angular/johnpapa',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	plugins: ['prettier', 'angular', 'typescript'],
	rules: {
		...angularConfig.rules,
		...bestPractices.rules,
		...es6.rules,
		...errors.rules,
		...imports.rules,
		...node.rules,
		...strict.rules,
		...style.rules,
		...variables.rules,
		'prettier/prettier': ['warn', prettierConfig]
	},
	env: {
		node: true,
		browser: true,
		jquery: true
	},
	globals: {
		angular: true,
		Modernizr: true,
		Rx: true,
		rangy: true,
		toastr: true,
		moment: true,
		pace: true,
		Dropzone: true,
		Intercom: true
	},
	overrides: [
		{
			files: ['**/*.ts'],
			parser: 'typescript-eslint-parser',
			rules: {
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'no-redeclare': 'off',
				...typescriptConfig.rules
			}
		}
	]
};
