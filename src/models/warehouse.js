'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Warehouses.belongsTo(models.Productstatusses, { foreignKey: "productstatuss_id" });
      Warehouses.hasMany(models.Projects, { foreignKey: "warehouse_id" });



    }
  };
  Warehouses.init({
    image: DataTypes.STRING,
    product: DataTypes.STRING,
    productstatuss_id: DataTypes.INTEGER,
    product_number: DataTypes.STRING,
    product_cost: DataTypes.STRING,
    Suppliers: DataTypes.STRING,
    unit: DataTypes.STRING,
    unitMoney: DataTypes.STRING,
    Suppliers_address: DataTypes.STRING,
    Suppliers_phone: DataTypes.STRING,
    createdBy: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Warehouses',
  });
  return Warehouses;
};