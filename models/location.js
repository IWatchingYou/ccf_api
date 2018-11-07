'use strict';
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define('location', {
    loc_code: DataTypes.STRING
  }, {});
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};