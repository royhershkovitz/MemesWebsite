const myApp = angular.module('imageList', []);

myApp.controller('myController', ['$scope', '$log', function($scope, $log){
    $scope.TestClick = function(){
      $log.log('You have clicked');
    }
  }])

myApp.controller('imageList', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.start = 3;
    $scope.jump = 10;
    $scope.http = $http;
    $scope.self = this;
    $scope.pullMore = function(){
        console.log('pulling');
        http.get(`/data?_collection=images&_index=${$scope.start}&_length=${$scope.jump}`).
        then(function(response) {
            $scope.start += $scope.jump;
            $scope.self.list.push(...response.data);
        });
    };
  }]);