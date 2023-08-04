'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresswards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Addresswards.belongsTo(models.Addressdistricts, { foreignKey: "addressdistrict_id" });

      Addresswards.hasMany(models.Projects, { foreignKey: "addressward_id" });

    }
  };
  Addresswards.init({
    addressdistrict_id: DataTypes.INTEGER,
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Addresswards',
  });
  return Addresswards;
};