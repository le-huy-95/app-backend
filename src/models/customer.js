'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customers.hasMany(models.Projects, { foreignKey: "customer_id" });
            Customers.belongsTo(models.Provincecustomers, { foreignKey: "provincecustomer_id" });
            Customers.belongsTo(models.Districtcustomers, { foreignKey: "districtcustomer_id" });
            Customers.belongsTo(models.Wardcustomers, { foreignKey: "wardcustomer_id" });
        }
    };
    Customers.init({
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        addressDetail: DataTypes.STRING,
        note: DataTypes.STRING,
        provincecustomer_id: DataTypes.INTEGER,
        districtcustomer_id: DataTypes.INTEGER,
        wardcustomer_id: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Customers',
    });
    return Customers;
};