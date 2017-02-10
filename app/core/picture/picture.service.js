angular.
	module('core.picture').
	factory('Picture', ['$resource', function($resource) {
		return $resource('pictureData/:pictureId.json', {}, {
			query: {
				method:'GET',
				params: {pictureId: 'picture'},
				isArray:true
			}
		});
	}]);