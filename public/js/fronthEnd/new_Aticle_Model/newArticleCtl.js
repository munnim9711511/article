var article  = angular.module("artcleCtl",["httpPostService"]);
article.controller("articleCTL",["$scope","$http",function($scope,$http,postDataService){
      $scope.return_data;
      $scope.myFile;

      $scope.articleData = {
        docTitle:"",
        docName:"",
        docInfo:""
      }

      $scope.sendData =function(){

          postDataService.sendPostReq($scope.articleData.docTitle,$scope.articleData.docName,$scope.articleData.docInfo);

      }
$scope.uploadFile = function(){
 var fd = new FormData();
  fd.append('file', file);
  $http.post("/get-file", fd, {
           transformRequest: angular.identity,
           headers: {'Content-Type': undefined}
       })
       .success(function(){
       })
       .error(function(){
       });
       return false;
}


}]);

article.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
