'use strict';
module.exports = (sequelize, DataTypes) => {
  var group_position = sequelize.define('group_position', {
    gpos_name: DataTypes.STRING
  }, {});
  group_position.associate = function(models) {
    // associations can be defined here
  };
  return group_position;
};