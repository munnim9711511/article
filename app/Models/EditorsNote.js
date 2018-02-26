'use strict'

const Model = use('Model')

class EditorsNote extends Model {
  static get table(){
    return 'editors_notes';
  }
}

module.exports = EditorsNote
