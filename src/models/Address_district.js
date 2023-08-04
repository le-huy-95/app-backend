'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addressdistricts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Addressdistricts.belongsTo(models.Addressprovinces, { foreignKey: "addressprovince_id" });

      Addressdistricts.hasMany(models.Projects, { foreignKey: "addressdistrict_id" });
      Addressdistricts.hasMany(models.Addresswards, { foreignKey: "addressdistrict_id" });

    }
  };
  Addressdistricts.init({
    addressprovince_id: DataTypes.INTEGER,
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Addressdistricts',
  });
  return Addressdistricts;
};