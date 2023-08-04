'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wardcustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wardcustomers.belongsTo(models.Districtcustomers, { foreignKey: "districtcustomer_id" });
      Wardcustomers.hasMany(models.Users, { foreignKey: "wardcustomer_id" });
      Wardcustomers.hasMany(models.Customers, { foreignKey: "wardcustomer_id" });
      Wardcustomers.hasMany(models.Projects, { foreignKey: "wardcustomer_id" });


    }
  };
  Wardcustomers.init({
    districtcustomer_id: DataTypes.INTEGER,
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Wardcustomers',
  });
  return Wardcustomers;
};