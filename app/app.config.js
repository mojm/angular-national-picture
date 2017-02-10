angular.
	module("app").
	config(["$locationProvider", "$routeProvider", 
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider.
				when('/pictures', {
					template: '<picture-list></picture-list>'
				}).
				when('/pictures/:pictureId', {
					template: '<picture-detail></picture-detail>'
				}).
				otherwise('/pictures');
		}
	]);
