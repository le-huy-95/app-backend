'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.STRING
      },
      warehouse_id: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.STRING
      },
      money: {
        type: Sequelize.STRING
      },
      shippingunit_id: {
        type: Sequelize.INTEGER
      },
      shipping_Cost: {
        type: Sequelize.STRING
      },
      From_address: {
        type: Sequelize.STRING

      },
      To_address: {
        type: Sequelize.STRING

      },
      total: {
        type: Sequelize.STRING
      },
      totalWitShippingCost: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
      },
      createdByName: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      unit_money: {
        type: Sequelize.STRING
      },
      done_status: {
        type: Sequelize.STRING
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      Note: {
        type: Sequelize.STRING
      },
      name_customer: {
        type: Sequelize.STRING
      },
      age_customer: {
        type: Sequelize.STRING

      },
      phoneNumber_customer: {
        type: Sequelize.STRING

      },
      addressDetail: {
        type: Sequelize.STRING

      },
      provincecustomer_id: {
        type: Sequelize.INTEGER

      },
      districtcustomer_id: {
        type: Sequelize.INTEGER

      },
      wardcustomer_id: {
        type: Sequelize.INTEGER

      },
      saleschannel_id: {
        type: Sequelize.INTEGER
      },
      statusdelivery_id: {
        type: Sequelize.INTEGER
      },

      statuspayment_id: {
        type: Sequelize.INTEGER
      },

      statuspickup_id: {
        type: Sequelize.INTEGER

      },
      statuswarehouse_id: {
        type: Sequelize.INTEGER

      },
      Notemore: {
        type: Sequelize.STRING

      },

      Pricedrop: {
        type: Sequelize.STRING

      },
      Netsalary: {
        type: Sequelize.STRING

      },
      paid: {
        type: Sequelize.STRING

      },
      statusreceivedmoney_id: {
        type: Sequelize.INTEGER

      },
      address_pick_up: {
        type: Sequelize.STRING

      },
      addressprovince_id: {
        type: Sequelize.INTEGER

      },
      addressdistrict_id: {
        type: Sequelize.INTEGER

      },
      addressward_id: {
        type: Sequelize.INTEGER

      },
      Detail_Place_of_receipt: {
        type: Sequelize.STRING

      },
      totalWithShippingCost: {
        type: Sequelize.STRING
      },
      flag: {
        type: Sequelize.BOOLEAN
      },
      Vehicle_pickup: {
        type: Sequelize.STRING
      },
      Vehicle_delivery: {
        type: Sequelize.STRING
      },
      Vehicle_delivery: {
        type: Sequelize.STRING
      },
      Sub_money: {
        type: Sequelize.STRING
      },
      Cancel_reason: {
        type: Sequelize.STRING
      },
      Account_number: {
        type: Sequelize.STRING
      },
      Main_Account: {
        type: Sequelize.STRING
      },
      Bank_name: {
        type: Sequelize.STRING
      },
      Status_product: {
        type: Sequelize.STRING
      },
      User_PickUp: {
        type: Sequelize.STRING
      },

      User_Warehouse: {
        type: Sequelize.STRING
      },
      User_Delivery: {
        type: Sequelize.STRING
      },
      User_Overview: {
        type: Sequelize.STRING
      },
      Notice_PickUp: {
        type: Sequelize.STRING
      },
      Notice_Warehouse: {
        type: Sequelize.STRING
      },
      Notice_Delivery: {
        type: Sequelize.STRING
      },
      Number_PickUp: {
        type: Sequelize.STRING
      },
      Number_Warehouse: {
        type: Sequelize.STRING

      },
      Number_Delivery: {
        type: Sequelize.STRING

      },
      Number_Overview: {
        type: Sequelize.STRING

      },
      pickup_time: {
        type: Sequelize.STRING

      },
      pickupDone_time: {
        type: Sequelize.STRING

      },
      warehouse_time: {
        type: Sequelize.STRING

      },
      warehouseDone_time: {
        type: Sequelize.STRING

      },
      Delivery_time: {
        type: Sequelize.STRING

      },
      DeliveryDone_time: {
        type: Sequelize.STRING

      },
      Overview_time: {
        type: Sequelize.STRING

      },
      OverviewDone_time: {
        type: Sequelize.STRING

      },

      name_account: {
        type: Sequelize.STRING

      },
      Mode_of_payment: {
        type: Sequelize.STRING

      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};