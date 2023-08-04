'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Statuspickups extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Statuspickups.hasMany(models.Projects, { foreignKey: "statuspickup_id" });

        }
    };
    Statuspickups.init({
        status: DataTypes.STRING,



    }, {
        sequelize,
        modelName: 'Statuspickups',
    });
    return Statuspickups;
};