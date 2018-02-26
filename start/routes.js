'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/
const Helpers = use('Helpers')
const Route = use('Route')

Route.get('/','ArticleController.index');
Route.get('/wp-admin','ArticleController.login');
Route.get('/admin','ArticleController.adminPage').middleware(['auth']);
Route.get('/logout','ArticleController.logout');
Route.get('/get-editors-note','ArticleController.editorNote');
Route.get('/get-sports-data','ArticleController.getSportsData');
Route.get('/get-rligion-data','ArticleController.getReligionData');
Route.get('/recipe-data','ArticleController.recipeData');
Route.get('/get-stories-data','ArticleController.storiesData');


Route.post('/test-log','ArticleController.testLog');
Route.post('/post-article-data','ArticleController.uploadData');
Route.post('/get-file',async({request})=>{
  console.log("test");
});
Route.post('/editors-notes','ArticleController.editorsNote');
