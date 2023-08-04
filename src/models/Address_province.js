'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addressprovinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Addressprovinces.hasMany(models.Projects, { foreignKey: "addressprovince_id" });
      Addressprovinces.hasMany(models.Addressdistricts, { foreignKey: "addressprovince_id" });


    }
  };
  Addressprovinces.init({
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Addressprovinces',
  });
  return Addressprovinces;
};