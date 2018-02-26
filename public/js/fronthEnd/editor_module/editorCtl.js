var editorCtl = angular.module("editorCtl",[]);

editorCtl.controller("editorCTL",function($scope,$http,$interval,$timeout){
  $scope.hide = true;
  $scope.editorsData = "";
  $scope.publishEditorsNote = function(){
// console.log($scope.editorsData);
$scope.hide = false;



    $http({
      method:"POST",
      url:"/editors-notes",
      data:{
        note:$scope.editorsData
      }
    }).then(function(res){
      $timeout(function () {
            $scope.hide = true;
             Materialize.toast('Data Saved!', 2000)
          }, 2000);
    },function(erro){

    });
    return false;
  }

  $scope.edata ;

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




  console.log($scope.edata);
});
