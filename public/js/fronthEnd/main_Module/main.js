var main = angular.module("main",
["ngRoute","editorCtl","sportsCtl","religionCtl","recipeCtl","storiesCtl"]);

main.config(["$routeProvider",function($routeProvider){

  $routeProvider

  // .when("/", {
  //         templateUrl : "/js/fronthEnd/editor_module/editor.html",
  //         controller  : "editorCTL"
  //     })
  .when('/sports',{

      templateUrl :"/js/fronthEnd/sport_module/sports.html",
       controller  :"sportsCTL"

  })
  .when('/religion',{

      templateUrl :"/js/fronthEnd/religion_module/religion.html",
      controller  :"religionCTL"

  })
   .when('/recipie',{

      templateUrl :"/js/fronthEnd/recipie/recipe.html",
      controller  :"recipeCTL"

  })
  .when('/stories',{

      templateUrl :"/js/fronthEnd/story_module/stories.html",
       controller :"storiesCTL"

  })

}]);
