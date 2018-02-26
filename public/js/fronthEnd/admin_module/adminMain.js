var adminMain = angular.module("adminMain",["ngRoute","articleManage","editArticleCtl","artcleCtl","requestCtl","editorCtl"]);
adminMain.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/js/fronthEnd/admin_articl_manage_Module/article.html",
        controller  : "articleCtl"
    })
    .when("/publish-article", {
        templateUrl : "/js/fronthEnd/new_Aticle_Model/newArticle.html",
        controller  : "articleCTL"
    })
    .when("/edit-article",{
      templateUrl:"/js/fronthEnd/editarticles_Module/editAticle.html",
      controller:"EditArticleCTL"

    })
    .when("/request-articles-published",{
      templateUrl:"/js/fronthEnd/request_Module/request.html",
      controller:"requestCTL"
    })
    .when("/editor-note",{
      templateUrl:"/js/fronthEnd/editor_module/editor.html",
      controller:"editorCTL"
    });;

});
