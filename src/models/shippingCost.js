'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shippingcosts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shippingcosts.belongsTo(models.Shippingunits, { foreignKey: "shippingunit_id" });
        }
    };
    Shippingcosts.init({
        shippingunit_id: DataTypes.INTEGER,
        From: DataTypes.STRING,
        To: DataTypes.STRING,
        Cost: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Shippingcosts',
    });
    return Shippingcosts;
};