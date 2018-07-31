var express = require('express');
var router = express.Router();

const emp = require('../controllers').employee;

router.get('/api/employee', emp.list);
router.get('/api/employee/:id', emp.byId);
router.post('/api/employee', emp.add);
router.patch('/api/employee/:id', emp.update);
router.delete('/api/employee/:id', emp.delete);

module.exports = router;
