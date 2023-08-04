'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notifications extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    };
    Notifications.init({
        project_id: DataTypes.INTEGER,
        Order: DataTypes.STRING,
        Change_content: DataTypes.STRING,
        ChangeBy: DataTypes.STRING,
        CreatedBy: DataTypes.STRING,
        ViewByuser: DataTypes.STRING,
        ViewByStaff: DataTypes.STRING,
        Unit: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Notifications',
    });
    return Notifications;
};