'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    staff_code: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    _token: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};