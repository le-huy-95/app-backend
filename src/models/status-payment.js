'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statuspayments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Statuspayments.hasMany(models.Projects, { foreignKey: "statuspayment_id" });

        }
    };
    Statuspayments.init({
        status: DataTypes.STRING,



    }, {
        sequelize,
        modelName: 'Statuspayments',
    });
    return Statuspayments;
};