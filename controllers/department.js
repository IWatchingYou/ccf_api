const employee = require('../models').employee;
const sequelize = require('sequelize');

module.exports = {
  listDepartment(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('department')), 'department'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  },

  listDepartment_code(req, res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('department_code')), 'department_code'
      ]]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  },

  listCount(req, res){
    return employee
    .findAndCountAll({
      where: {
        'department': req.query.department
      }
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(error => res.status(400).send(error))
  }
}