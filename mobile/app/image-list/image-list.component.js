
function ImageListController($http) {
    var ctrl = this;
    ctrl.http = $http;
    ctrl.start = 3;
    ctrl.jump = 10;
  
    // This would be loaded by $http etc.
    ctrl.list = [];
  
    ctrl.pullClick = function() {
        console.log('clicked!');
        ctrl.pullMore();
    };
  
    ctrl.pullMore = function() {
        console.log('pulling');
        ctrl.http.get(`/data?_collection=images&_index=${ctrl.start}&_length=${ctrl.jump}`).
        then(function(response) {
            ctrl.start += ctrl.jump;
            ctrl.list.push(...response.data);
        });
    };
    
    ctrl.pullMore();
}

angular.
module('imageList').
component('imageList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'app/image-list/image-list.template.html',
  controller: ImageListController
});
  
  