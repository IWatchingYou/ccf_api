const employee = require('../models').employee;
const sequelize = require('sequelize');

module.exports = {
  listLocation(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('location')), 'location'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  },

  listLocation_code(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('location_code')), 'location_code'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  }
}