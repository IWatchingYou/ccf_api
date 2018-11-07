'use strict';
module.exports = (sequelize, DataTypes) => {
  var department = sequelize.define('department', {
    dep_code: DataTypes.STRING
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};