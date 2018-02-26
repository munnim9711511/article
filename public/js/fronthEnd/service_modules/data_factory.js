var dataFatory = angular.module("dataFatory",[]);

dataFatory.service("getData",function($http){
    this.getDataFromServer = function(URL){
      $http.get(URL).then(function(res){
        return res.data;
      });
    }
});
