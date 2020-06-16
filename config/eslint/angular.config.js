module.exports = {
	rules: {
		// DISABLED
		'angular/controller-as': 0,
		'angular/controller-as-route': 0,
		'angular/controller-as-vm': 0,
		'angular/prefer-component': 0,
		'angular/component-name': 0,
		'angular/constant-name': 0,
		'angular/controller-name': [0, '/[A-Z].*Controller$/'],
		'angular/directive-name': 0,
		'angular/factory-name': 0,
		'angular/filter-name': 0,
		'angular/module-name': 0,
		'angular/provider-name': 0,
		'angular/value-name': 0,
		'angular/service-name': 0,
		'angular/no-service-method': 0,
		'angular/definedundefined': 0,
		'angular/document-service': 0,
		'angular/foreach': 0,
		'angular/json-functions': 0,
		'angular/typecheck-array': 0,
		'angular/typecheck-date': 0,
		'angular/typecheck-function': 0,
		'angular/typecheck-number': 0,
		'angular/typecheck-object': 0,
		'angular/typecheck-string': 0,
		'angular/component-limit': 0, // disabled
		'angular/window-service': 0,
		'angular/log': 0,
		'angular/one-dependency-per-line': 0,
		// WARNINGS
		'angular/deferred': 1,
		'angular/di-unused': 1,
		'angular/di-order': [1, true],
		'angular/file-name': 0, // disabled
		//  'angular/avoid-scope-typos': 0, //error - undefined rule
		// ERRORS
		'angular/module-getter': 2,
		'angular/module-setter': 2,
		'angular/no-private-call': [1, { allow: ['$$phase'] }],
		'angular/no-inline-template': 0, // disabled
		'angular/no-services': [1, ['$http']],
		'angular/directive-restrict': 1,
		'angular/empty-controller': 1,
		'angular/no-run-logic': 1, // TODO: to test run function
		'angular/on-watch': 1,
		'angular/no-cookiestore': 2,
		// 'angular/no-directive-replace': [1, { ignoreReplaceFalse: true }],
		'angular/no-http-callback': 1,
		'angular/di': [1, '$inject', { matchNames: true }],
		'angular/function-type': [1, 'named'],
		'angular/module-dependency-order': [1, { grouped: false }], // disabled
		'angular/rest-service': [1, '$http'],
		'angular/angularelement': 1,
		'angular/interval-service': 1,
		'angular/no-jquery-angularelement': 1,
		'angular/no-angular-mock': 1,
		'angular/timeout-service': 0, // You should use the $timeout service instead of the default window.setTimeout method
		'angular/on-destroy': 1,
		'angular/watchers-execution': [1, '$digest']
	}
};
