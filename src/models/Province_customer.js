'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provincecustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provincecustomers.hasMany(models.Users, { foreignKey: "provincecustomer_id" });

      Provincecustomers.hasMany(models.Districtcustomers, { foreignKey: "provincecustomer_id" });
      Provincecustomers.hasMany(models.Customers, { foreignKey: "provincecustomer_id" });
      Provincecustomers.hasMany(models.Projects, { foreignKey: "provincecustomer_id" });


    }
  };
  Provincecustomers.init({
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Provincecustomers',
  });
  return Provincecustomers;
};