'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Saleschannels extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Saleschannels.hasMany(models.Projects, { foreignKey: "saleschannel_id" });
        }
    };
    Saleschannels.init({
        name: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Saleschannels',
    });
    return Saleschannels;
};