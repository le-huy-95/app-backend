'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statuswarehouses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Statuswarehouses.hasMany(models.Projects, { foreignKey: "statuswarehouse_id" });

        }
    };
    Statuswarehouses.init({
        status: DataTypes.STRING,



    }, {
        sequelize,
        modelName: 'Statuswarehouses',
    });
    return Statuswarehouses;
};