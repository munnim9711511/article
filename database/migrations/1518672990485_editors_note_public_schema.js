'use strict'

const Schema = use('Schema')

class EditorsNotePublicSchema extends Schema {
  up () {
    this.create('editors_note_publics', (table) => {
      table.increments()
      table.text('editors_note')
      table.timestamps()
    })
  }

  down () {
    this.drop('editors_note_publics')
  }
}

module.exports = EditorsNotePublicSchema
