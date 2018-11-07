const fmremployee = require('../models').fmr_employees;

module.exports = {
  empStop(req, res){
    return fmremployee
    .findAndCountAll({
      order: [
        ['name_eng', 'asc']
      ],
    })
    .then( emp => res.status(200).send({result: emp}) )
    .catch( err => res.status(400).send(err) )
  }
}