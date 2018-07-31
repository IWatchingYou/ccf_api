const employee = require('../models').employee;

module.exports = {
  list(req, res) {
    return employee
    .findAll({
      order: [
        ['date_join', 'ASC']
      ]
    })
    .then( emp => res.status(200).send(emp) )
    .catch( err => res.status(400).send(err) )
  },

  byId(req, res) {
    return employee
    .findById(req.params.id)
    .then( emp => {
      if(!emp){
        return res.status(404).send({
          message: 'Employee Not Found'
        });
      }
      return res.status(200).send(emp)
    } )
    .catch(err => res.status(400).send(err))
  },

  add(req, res) {
    return employee
    .create({
      staff_code: req.body.staff_code,
      branch_code: req.body.branch_code,
      name_eng: req.body.name_eng,
      name_khm: req.body.name_khm,
      gender: req.body.gender,
      marital_status: req.body.marital_status,
      dob: req.body.dob,
      location: req.body.location,
      department: req.body.department,
      group_position: req.body.group_position,
      position: req.body.position,
      date_join: req.body.date_join,
      department_code: req.body.department_code,
      location_code: req.body.location_code,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      active_stat: req.body.active_stat
    })
    .then( emp => res.status(201).send(emp) )
    .catch( err => res.status(400).send(err) )
  },

  update(req, res) {
    return employee
    .findById(req.params.id)
    .then( emp => {
      if(!emp) {
        return res.status(404).send({
          message: "Employee Not Found"
        });
      }
      return emp
        .update({
          staff_code: req.body.staff_code,
          branch_code: req.body.branch_code,
          name_eng: req.body.name_eng,
          name_khm: req.body.name_khm,
          gender: req.body.gender,
          marital_status: req.body.marital_status,
          dob: req.body.dob,
          location: req.body.location,
          department: req.body.department,
          group_position: req.body.group_position,
          position: req.body.position,
          date_join: req.body.date_join,
          department_code: req.body.department_code,
          location_code: req.body.location_code,
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          active_stat: req.body.active_stat
        })
        .then(() => res.status(200).send(emp))
        .catch(err => res.status(400).send(err))
    })
    .catch(err => res.status(400).send(err));
  },

  delete(req, res) {
    return employee
    .findById(req.params.id)
    .then(emp => {
      if(!emp){
        return res.status(400).send({
          message: "Employee Not Found"
        })
      }
      return emp
        .destroy()
        .then(() => res.status(204).send({
          message: "Employee Was Remove",
          emp
        }))
        .catch( err => res.status(400).send(err))
    })
    .catch( err => res.status(400).send(err))
  }
}