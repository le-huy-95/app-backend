'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Districtcustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Districtcustomers.belongsTo(models.Provincecustomers, { foreignKey: "provincecustomer_id" });
      Districtcustomers.hasMany(models.Wardcustomers, { foreignKey: "districtcustomer_id" });
      Districtcustomers.hasMany(models.Users, { foreignKey: "districtcustomer_id" });
      Districtcustomers.hasMany(models.Customers, { foreignKey: "districtcustomer_id" });
      Districtcustomers.hasMany(models.Projects, { foreignKey: "districtcustomer_id" });


    }
  };
  Districtcustomers.init({
    provincecustomer_id: DataTypes.INTEGER,
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Districtcustomers',
  });
  return Districtcustomers;
};