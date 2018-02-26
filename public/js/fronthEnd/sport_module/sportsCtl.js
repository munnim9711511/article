var sportsCtl = angular.module("sportsCtl",[]);

sportsCtl.controller("sportsCTL",function($scope,$http,$interval){

    $scope.sportsArticleData;
    
    $http.get("get-sports-data")
    .then(function(response) {

        $scope.sportsArticleData = response.data;
    });
    $interval(function () {
      $http.get("get-sports-data")
    .then(function(response) {

          $scope.sportsArticleData = response.data;
    });
  }, 5000);



 console.log(  $scope.sportsArticleData);

});
