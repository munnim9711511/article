'use strict'

const Model = use('Model')

class EdiTorNote extends Model {
  static get table(){
    return 'editors_note_publics';
  }

}

module.exports = EdiTorNote
