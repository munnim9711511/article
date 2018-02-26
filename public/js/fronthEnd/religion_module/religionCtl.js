var religionCtl = angular.module("religionCtl",[]);

religionCtl.controller("religionCTL",function($scope,$interval,$http){
    $scope.religionData ;
    $interval(function () {
      $http.get("/get-rligion-data")
    .then(function(response) {

          $scope.religionData = response.data;
    });
  }, 1000);
    console.log($scope.religionData);
})
