angular.
	module('pictureDetail').
	component('pictureDetail', {
		templateUrl:'pictureDetail/pictureDetail.template.html',
		controller: ['Picture','$routeParams', function pictureDetalController(Picture, $routeParams) {
            var self = this;
            self.setImgUrl = function(index){
            	self.mainImgUrl = self.picture.details[index].img;
            	self.mainTitle = self.picture.details[index].title;
            	self.mainDes = self.picture.details[index].des;
            }
            self.picture = Picture.get({pictureId:$routeParams.pictureId}, function(){
            	self.setImgUrl(0);

            })
		}]
	});