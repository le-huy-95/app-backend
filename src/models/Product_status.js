'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productstatusses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Productstatusses.hasMany(models.Warehouses, { foreignKey: "productstatuss_id" });

    }
  };
  Productstatusses.init({
    status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Productstatusses',
  });
  return Productstatusses;
};