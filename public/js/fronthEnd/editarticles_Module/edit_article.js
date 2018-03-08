var editArticleCtl = angular.module("editArticleCtl",[]);
editArticleCtl.controller("EditArticleCTL",["$scope","$http",function($scope,$http){
    $scope.articleData = "";
      $http({
        method:"GET",
        url:"/get-all-article"

      }).then(function(res){
        $scope.articleData = res.data;
        console.log( res.data);
      });
}])
