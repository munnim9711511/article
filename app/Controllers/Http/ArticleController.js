'use strict'

const User = use('App/Models/User');
const EditorsNote = use('App/Models/EditorsNote');
const ArticlesDocInfor = use('App/Models/ArticlesDocInfor');
const EditorArticleNote = use('App/Models/EdiTorNote');
const Helpers = use('Helpers')

const Hash = use('Hash');
class ArticleController {
  async index({view}){
    // const newUser = new User();
    // newUser.username = "admin";
    // newUser.password = "welcome@mpl";
    // newUser.save();
    return view.render('main');

  }
  async login({view}){

    return view.render('login');
  }
  async testLog({ response,redirect,request, auth}){

  const {username,password} = request.all()
   await auth.attempt(username,password);
  // return auth.user.username;

    response.redirect('/admin');

  }
  async adminPage({view}){
    return view.render('admin');
  }

  async logout({view,response,redirect,auth}){

    await auth.logout();
  response.redirect('/wp-admin');
  }

  async editorNote(){
    return await EditorsNote.all();
  }
  async getSportsData(){



return await
    ArticlesDocInfor
    .query()

    .where('doc_title','=', 'Sports');


  }
  async getReligionData(){
    return await ArticlesDocInfor
    .query()
    .where('doc_title', 'religion');
  }
  async recipeData(){
    return await ArticlesDocInfor
    .query()
    .where('doc_title', 'recipe');
  }
  async storiesData(){
    return await ArticlesDocInfor
    .query()
    .where('doc_title','=', 'stories');
  }
  async uploadData({request,move,response,view}){

    const doc = request.file('doc', {


        })

        await doc.move(Helpers.publicPath('uploads'), {

        })


        const newDoc = new ArticlesDocInfor();
        newDoc.doc_title = request.input('docTitle');
        newDoc.doc_information = request.input('testinfo');
        newDoc.doc_name =doc.fileName;
        newDoc.save();
        return view.render('admin');

  }
  async editorsNote({request}){

    const editorData =new EditorArticleNote();
    editorData.editors_note = request.input("note");
    editorData.save();
    return "Data have been saved";

  }
  async getAllArticleData({request}){
    return  await ArticlesDocInfor.all();
  }

}

module.exports = ArticleController
