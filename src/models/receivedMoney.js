'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statusreceivedmoneys extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Statusreceivedmoneys.hasMany(models.Projects, { foreignKey: "statusreceivedmoney_id" });

        }
    };
    Statusreceivedmoneys.init({
        status: DataTypes.STRING,



    }, {
        sequelize,
        modelName: 'Statusreceivedmoneys',
    });
    return Statusreceivedmoneys;
};