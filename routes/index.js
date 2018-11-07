var express = require('express');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    const type = file.originalname.split('.');
    cb(null, `${req.params.id}.png`);
  }
})

const upload = multer({storage: storage});

const emp = require('../controllers').employee;
const dep = require('../controllers').department;
const pos = require('../controllers').position;
const loc = require('../controllers').location;
const bra = require('../controllers').branch;
const ph = require('../controllers').photo;
const emps = require('../controllers').fmremployee;
const us = require('../controllers').user;

router.get('/api/employee_stop',emps.empStop);
router.get('/api/employees', emp.listAll);
router.get('/api/employees/page/:page', emp.list);
router.get('/api/employees/:id', emp.byId);
router.get('/api/employee/', emp.byName);
router.post('/api/employee', emp.add);
router.put('/api/employees/:id', emp.update);
router.delete('/api/employees/:id', emp.delete);
router.get('/api/department', dep.listDepartment);
router.get('/api/department_code', dep.listDepartment_code);
router.get('/api/location', loc.listLocation);
router.get('/api/location_code', loc.listLocation_code);
router.get('/api/position', pos.listPosition);
router.get('/api/group_position', pos.listGroup_position);
router.get('/api/branch', bra.listBranch_code);
router.get('/api/grade', emp.grade);
router.get('/api/countemp', emp.count);
router.post('/api/upload/:id', upload.single('Image'), ph.upload);
router.get('/api/countall/', dep.listCount);
router.post('/api/login', us.login);

module.exports = router;
