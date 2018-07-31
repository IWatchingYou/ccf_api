'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('employee', {
    staff_code: DataTypes.STRING(4),
    branch_code: DataTypes.STRING,
    name_eng: DataTypes.STRING,
    name_khm: DataTypes.STRING,
    gender: DataTypes.STRING(1),
    marital_status: DataTypes.STRING(30),
    dob: DataTypes.DATE,
    location: DataTypes.STRING(30),
    department: DataTypes.STRING(100),
    group_position: DataTypes.STRING(100),
    position: DataTypes.STRING(100),
    date_join: DataTypes.DATE,
    department_code: DataTypes.STRING(3),
    location_code: DataTypes.STRING(4),
    created_date: DataTypes.DATE,
    email: DataTypes.STRING(50),
    first_name: DataTypes.STRING(50),
    last_name: DataTypes.STRING(50),
    active_stat: DataTypes.BOOLEAN
  }, {
    createdAt: 'created_date',
    updatedAt: 'created_date',
    schema: 'hr',
  });
  Employee.associate = function(models){
    
  }
  return Employee;
}