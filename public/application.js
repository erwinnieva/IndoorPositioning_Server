var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'developerProfile']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});