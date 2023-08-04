'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Groups, { foreignKey: "group_id" });
      Users.belongsTo(models.Provincecustomers, { foreignKey: "provincecustomer_id" });
      Users.belongsTo(models.Districtcustomers, { foreignKey: "districtcustomer_id" });
      Users.belongsTo(models.Wardcustomers, { foreignKey: "wardcustomer_id" });
      Users.belongsTo(models.Shippingunits, { foreignKey: "shippingunit_id" });

    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    usersname: DataTypes.STRING,
    addressDetail: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    provincecustomer_id: DataTypes.INTEGER,
    districtcustomer_id: DataTypes.INTEGER,
    wardcustomer_id: DataTypes.INTEGER,
    Position: DataTypes.STRING,
    shippingunit_id: DataTypes.INTEGER,
    resetPasswordPin: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};