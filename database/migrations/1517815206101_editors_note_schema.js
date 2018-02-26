'use strict'

const Schema = use('Schema')

class EditorsNoteSchema extends Schema {
  up () {
    this.create('editors_notes', (table) => {
      table.increments()
      table.text('note');
      table.text('readers_feedback');
      table.timestamps()
    })
  }

  down () {
    this.drop('editors_notes')
  }
}

module.exports = EditorsNoteSchema
