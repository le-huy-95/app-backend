'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Projects.belongsTo(models.Statusreceivedmoneys, { foreignKey: "statusreceivedmoney_id" });
      Projects.belongsTo(models.Statusdeliverys, { foreignKey: "statusdelivery_id" });
      Projects.belongsTo(models.Statuspayments, { foreignKey: "statuspayment_id" });
      Projects.belongsTo(models.Shippingunits, { foreignKey: "shippingunit_id" });
      Projects.belongsTo(models.Customers, { foreignKey: "customer_id" });
      Projects.belongsTo(models.Saleschannels, { foreignKey: "saleschannel_id" });
      Projects.belongsTo(models.Statuspickups, { foreignKey: "statuspickup_id" });
      Projects.belongsTo(models.Statuswarehouses, { foreignKey: "statuswarehouse_id" });
      Projects.belongsTo(models.Provincecustomers, { foreignKey: "provincecustomer_id" });
      Projects.belongsTo(models.Districtcustomers, { foreignKey: "districtcustomer_id" });
      Projects.belongsTo(models.Wardcustomers, { foreignKey: "wardcustomer_id" });
      Projects.belongsTo(models.Addressprovinces, { foreignKey: "addressprovince_id" });
      Projects.belongsTo(models.Addressdistricts, { foreignKey: "addressdistrict_id" });
      Projects.belongsTo(models.Addresswards, { foreignKey: "addressward_id" });
      Projects.belongsTo(models.Warehouses, { foreignKey: "warehouse_id" });

    }
  };
  Projects.init({
    order: DataTypes.STRING,
    warehouse_id: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    money: DataTypes.STRING,
    shippingunit_id: DataTypes.INTEGER,
    shipping_Cost: DataTypes.STRING,
    From_address: DataTypes.STRING,
    To_address: DataTypes.STRING,
    total: DataTypes.STRING,
    totalWithShippingCost: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    Note: DataTypes.STRING,
    name_customer: DataTypes.STRING,
    age_customer: DataTypes.STRING,
    phoneNumber_customer: DataTypes.STRING,
    addressDetail: DataTypes.STRING,
    provincecustomer_id: DataTypes.INTEGER,
    districtcustomer_id: DataTypes.INTEGER,
    wardcustomer_id: DataTypes.INTEGER,
    saleschannel_id: DataTypes.INTEGER,
    statusdelivery_id: DataTypes.INTEGER,
    statuspayment_id: DataTypes.INTEGER,
    statuspickup_id: DataTypes.INTEGER,
    statuswarehouse_id: DataTypes.INTEGER,
    Notemore: DataTypes.STRING,
    Pricedrop: DataTypes.STRING,
    Netsalary: DataTypes.STRING,
    paid: DataTypes.STRING,
    statusreceivedmoney_id: DataTypes.INTEGER,
    address_pick_up: DataTypes.STRING,
    addressprovince_id: DataTypes.INTEGER,
    addressdistrict_id: DataTypes.INTEGER,
    addressward_id: DataTypes.INTEGER,
    Detail_Place_of_receipt: DataTypes.STRING,
    flag: DataTypes.BOOLEAN,
    done_status: DataTypes.STRING,
    Vehicle_pickup: DataTypes.STRING,
    Vehicle_delivery: DataTypes.STRING,
    Sub_money: DataTypes.STRING,
    Cancel_reason: DataTypes.STRING,
    Account_number: DataTypes.STRING,
    Bank_name: DataTypes.STRING,
    Status_product: DataTypes.STRING,
    User_PickUp: DataTypes.STRING,
    Number_PickUp: DataTypes.STRING,
    User_Warehouse: DataTypes.STRING,
    Number_Warehouse: DataTypes.STRING,
    User_Delivery: DataTypes.STRING,
    Number_Delivery: DataTypes.STRING,
    User_Overview: DataTypes.STRING,
    Number_Overview: DataTypes.STRING,
    Notice_PickUp: DataTypes.STRING,
    Notice_Warehouse: DataTypes.STRING,
    Notice_Delivery: DataTypes.STRING,
    pickup_time: DataTypes.STRING,
    pickupDone_time: DataTypes.STRING,
    warehouse_time: DataTypes.STRING,
    warehouseDone_time: DataTypes.STRING,
    Delivery_time: DataTypes.STRING,
    DeliveryDone_time: DataTypes.STRING,
    Overview_time: DataTypes.STRING,
    OverviewDone_time: DataTypes.STRING,
    createdByName: DataTypes.STRING,
    unit: DataTypes.STRING,
    unit_money: DataTypes.STRING,
    Main_Account: DataTypes.STRING,
    name_account: DataTypes.STRING,
    Mode_of_payment: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};