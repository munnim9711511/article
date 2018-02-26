'use strict'

const Schema = use('Schema')

class ArticlesDocInforSchema extends Schema {
    up () {
      this.create('articles_doc_infors', (table) => {
      table.increments()
      table.string('doc_title')
      table.string('doc_name')
      table.text('doc_information')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles_doc_infors')
  }
}

module.exports = ArticlesDocInforSchema
