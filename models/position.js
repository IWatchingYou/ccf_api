'use strict';
module.exports = (sequelize, DataTypes) => {
  var position = sequelize.define('position', {
    position: DataTypes.STRING
  }, {});
  position.associate = function(models) {
    // associations can be defined here
  };
  return position;
};