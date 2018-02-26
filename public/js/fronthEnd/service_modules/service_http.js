var httpPostService = angular.module("httpPostService",[]);
httpPostService.service("postDataService",function($http){
  this.sendPostReq = function(docTitle,docName,docInfo,fileName){
    $http({
      method:"POST",
      url:"",
      data:{
        title : docTitle,
        name  : docName,
        info  : docInfo
      }
    }).then(function(sucess){
        return sucess.data;
    },function(erro){

        return erro.data;

    })

  }
});
