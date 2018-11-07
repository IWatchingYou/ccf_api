const employee = require('../models').employee;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var con = require('../config/config.json');
var sequelize = new Sequelize(con.development);

module.exports = {
  count(req, res){
    return employee
    .findOne({
      attributes: [
        [Sequelize.fn('MAX', Sequelize.col('staff_code')), 'maxvalue']
      ]
    })
    .then(emp => res.status(200).send(emp))
    .catch( err => res.status(400).send(err))
  },

  list(req, res) {
    var par = (20*req.params.page)-1;
    if(par === -1) par = 0;
    return employee
    .findAndCountAll({
      order: [
        ['active_stat', 'DESC'],
        ['job_grade', 'DESC']
      ],
      limit: 20,
      offset: par
    })
    .then( emp => res.status(200).send({result: emp}) )
    .catch( err => res.status(400).send(err) )
  },
  
  listAll(req, res) {
    return employee
    .findAndCountAll({
      order: [
        ['active_stat', 'DESC'],
        ['job_grade', 'DESC']
      ]
    })
    .then( emp => res.status(200).send({result: emp}) )
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
      return res.status(200).send({result: emp})
    } )
    .catch(err => res.status(400).send(err))
  },

  byName(req, res) {
    let name = req.query.name;
    let phone = req.query.phone;
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;

    if(name == undefined && phone != undefined){
      sequelize.query(`select *from hr.employees where regexp_replace(contact_number, '[^0-9]', '', 'g') ilike '%${phone}%' union select *from hr.fmr_employees where regexp_replace(contact_number, '[^0-9]', '', 'g') ilike '%${phone}%' order by active_stat desc, job_grade desc, contact_number asc limit 20 offset 0`)
      .then(emp=>{
        if(!emp){
          return res.status(404).send({
            message: 'Employee Not Found'
          })
        }
        return res.status(200).send({result: {count: emp[1].rowCount,rows: emp[1].rows}})
      })
      .catch(err => res.status(400).send(err));
    }
    else if(name != undefined && phone == undefined){
      if(hasUnicode(name) === true){
        sequelize.query(`select *from hr.employees where name_khm ilike '%${name}%' union select *from hr.fmr_employees where name_khm ilike '%${name}%' order by active_stat desc, job_grade desc, name_khm asc limit 20 offset 0`)
        .then(emp=>{
          if(!emp){
            return res.status(404).send({
              message: 'Employee Not Found'
            })
          }
          return res.status(200).send({result: {count: emp[1].rowCount,rows: emp[1].rows}})
        })
        .catch(err => res.status(400).send(err)); 
      }
      else if(hasUnicode(name) === false){
        sequelize.query(`select *from hr.employees where name_eng ilike '%${name}%' union select *from hr.fmr_employees where name_eng ilike '%${name}%' order by active_stat desc, job_grade desc, name_khm asc limit 20 offset 0`)
        .then(emp=>{
          if(!emp){
            return res.status(404).send({
              message: 'Employee Not Found'
            })
          }
          return res.status(200).send({result: {count: emp[1].rowCount,rows: emp[1].rows}})
        })
        .catch(err => res.status(400).send(err)); 
      }
    }
    else if(start_date != undefined){
      sequelize.query(`select *from hr.employees where date_join between '${start_date}' and '${end_date}' union select *from hr.fmr_employees where date_join between '${start_date}' and '${end_date}' order by active_stat desc, job_grade desc, name_khm asc`)
      .then(emp=>{
        if(!emp){
          return res.status(404).send({
            message: 'Employee Not Found'
          })
        }
        return res.status(200).send({result: {count: emp[1].rowCount,rows: emp[1].rows}})
      })
      .catch(err => res.status(400).send(err)); 
    }
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
      active_stat: req.body.active_stat,
      job_grade: req.body.job_grade,
      contact_number: req.body.contact_number
    })
    .then( emp => res.status(201).send({emp}) )
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
          active_stat: req.body.active_stat,
          job_grade: req.body.job_grade,
          contact_number: req.body.contact_number
        })
        .then(() => res.status(200).send({result: emp}))
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
        .then(() => res.status(200).send({
          message: "Employee Was Remove"
        }))
        .catch( err => res.status(400).send(err))
    })
    .catch( err => res.status(400).send(err))
  },

  grade(req,res){
    return employee
    .findAll({
      attributes:[[
        sequelize.fn('DISTINCT', sequelize.col('job_grade')), 'job_grade'
      ]],
      order: [
        ['job_grade', 'DESC']
      ]
    })
    .then(emp => res.status(200).send({result: emp}))
    .catch(err => res.status(400).send(err))
  }
}

function hasUnicode(str){
  for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i)>127) return true;
  }
  return false;
}