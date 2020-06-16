const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
	rules: {
		// enforce or disallow variable initializations at definition
		'init-declarations': 'off',

		// disallow the catch clause parameter name being the same as a variable in the outer scope
		'no-catch-shadow': 'off',

		// disallow deletion of variables
		'no-delete-var': 'warn',

		// disallow labels that share a name with a variable
		// http://eslint.org/docs/rules/no-label-var
		'no-label-var': 'warn',

		// disallow specific globals
		'no-restricted-globals': ['warn', 'isFinite', 'isNaN'].concat(
			restrictedGlobals
		),

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': ['warn', { allow: ['Optional'] }],

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'warn',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'warn',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'warn',

		// disallow use of undefined variable
		// http://eslint.org/docs/rules/no-undefined
		// TODO: enable?
		'no-undefined': 'off',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true }
		],

		// disallow use of variables before they are defined
		'no-use-before-define': [
			'warn',
			{ functions: false, classes: true, variables: true }
		]
	}
};
