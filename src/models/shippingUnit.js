'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shippingunits extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shippingunits.hasMany(models.Projects, { foreignKey: "shippingunit_id" });
            Shippingunits.hasMany(models.Shippingcosts, { foreignKey: "shippingunit_id" });
            Shippingunits.hasMany(models.Users, { foreignKey: "shippingunit_id" });

        }
    };
    Shippingunits.init({
        NameUnit: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Shippingunits',
    });
    return Shippingunits;
};