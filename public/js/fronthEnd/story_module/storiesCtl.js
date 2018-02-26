var storiesCtl = angular.module("storiesCtl",[]);
storiesCtl.controller("storiesCTL",function($scope,$http,$interval){

  $scope.storiesdata;


      $interval(function () {
        $http.get("/get-stories-data")
      .then(function(response) {

            $scope.storiesdata = response.data;
      });
    }, 5000);

})
