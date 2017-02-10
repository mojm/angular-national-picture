angular
    .module("pictureList")
    .component('pictureList', {
        templateUrl: 'pictureList/pictureList-template.html',
        controller: ['Picture', function pictureListController(Picture) {
            this.pictures = Picture.query();
            this.orderPorps = "title";
        }]
    })
