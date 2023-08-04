'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statusdeliverys extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Statusdeliverys.hasMany(models.Projects, { foreignKey: "statusdelivery_id" });

        }
    };
    Statusdeliverys.init({
        status: DataTypes.STRING,



    }, {
        sequelize,
        modelName: 'Statusdeliverys',
    });
    return Statusdeliverys;
};