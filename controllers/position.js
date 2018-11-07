const employee = require('../models').employee;
const sequelize = require('sequelize');

module.exports = {
  listPosition(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('position')), 'position'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  },

  listGroup_position(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('group_position')), 'group_position'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  }
}