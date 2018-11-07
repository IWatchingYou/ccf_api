const employee = require('../models').employee;
const sequelize = require('sequelize');

module.exports = {
  listBranch_code(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('branch_code')), 'branch_code'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  }
}