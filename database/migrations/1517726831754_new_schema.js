'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {
  up () {
    this.create('news', (table) => {
      table.increments()
      table.string('articles_name');
      table.string('articles_submited_from');
      table.timestamps()
    })
  }

  down () {
    this.drop('news')
  }
}

module.exports = NewSchema
