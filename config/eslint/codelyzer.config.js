/* The following rules were disabled manually to avoid conflicts with Prettier
	eofline
  	import-spacing
  	indent
 	max-line-length
 	no-trailing-whitespace
  	one-line
  	quotemark
  	semicolon
  	typedef-whitespace
	whitespace
* */

module.exports = {
	rules: {
		'arrow-return-shorthand': { severity: 'warning' },
		'callable-types': { severity: 'warning' },
		'class-name': { severity: 'warning' },
		'comment-format': {
			severity: 'warning',
			options: [true, 'check-space']
		},
		curly: { severity: 'warning' },
		deprecation: {
			severity: 'warning'
		},
		eofline: false,
		forin: { severity: 'warning' },
		'import-blacklist': {
			severity: 'warning',
			options: [true, 'rxjs/Rx']
		},
		'import-spacing': false,
		indent: [false, 'spaces'],
		'interface-over-type-literal': { severity: 'warning' },
		'label-position': { severity: 'warning' },
		'max-classes-per-file': {
			severity: 'warning',
			options: [true, 1]
		},
		'max-line-length': [false, 140],
		'member-access': false,
		'member-ordering': {
			severity: 'warning',
			options: [
				true,
				{
					order: [
						'static-field',
						'instance-field',
						'static-method',
						'instance-method'
					]
				}
			]
		},
		'no-arg': { severity: 'warning' },
		'no-bitwise': { severity: 'warning' },
		'no-construct': { severity: 'warning' },
		'no-debugger': { severity: 'warning' },
		'no-duplicate-super': { severity: 'warning' },
		'no-empty': { severity: 'warning' },
		'no-empty-interface': false,
		'no-eval': { severity: 'warning' },
		'no-inferrable-types': {
			severity: 'warning',
			options: [true, 'ignore-params']
		},
		'no-misused-new': { severity: 'warning' },
		'no-non-null-assertion': { severity: 'warning' },
		'no-shadowed-variable': { severity: 'warning' },
		'no-string-literal': false,
		'no-string-throw': { severity: 'warning' },
		'no-switch-case-fall-through': { severity: 'warning' },
		'no-trailing-whitespace': false,
		'no-unnecessary-initializer': { severity: 'warning' },
		'no-unused-expression': { severity: 'warning' },
		'no-use-before-declare': { severity: 'warning' },
		'no-var-keyword': { severity: 'warning' },
		'object-literal-sort-keys': false,
		'one-line': [
			false,
			'check-open-brace',
			'check-catch',
			'check-else',
			'check-whitespace'
		],
		'prefer-const': { severity: 'warning' },
		quotemark: [false, 'single'],
		radix: { severity: 'warning' },
		semicolon: [false, 'always'],
		'triple-equals': {
			severity: 'warning',
			options: [true, 'allow-null-check']
		},
		'typedef-whitespace': [
			false,
			{
				'call-signature': 'nospace',
				'index-signature': 'nospace',
				parameter: 'nospace',
				'property-declaration': 'nospace',
				'variable-declaration': 'nospace'
			}
		],
		'unified-signatures': { severity: 'warning' },
		'variable-name': false,
		whitespace: [
			false,
			'check-branch',
			'check-decl',
			'check-operator',
			'check-separator',
			'check-type'
		],
		'contextual-life-cycle': { severity: 'warning' },
		'no-output-on-prefix': { severity: 'warning' },
		'no-input-rename': { severity: 'warning' },
		'no-output-rename': { severity: 'warning' },
		'use-life-cycle-interface': { severity: 'warning' },
		'use-pipe-transform-interface': { severity: 'warning' },
		'component-class-suffix': { severity: 'warning' },
		'directive-class-suffix': { severity: 'warning' }
	}
};
