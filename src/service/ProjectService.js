import { raw } from "body-parser"
import db from "../models/index"
import moment from "moment"
import _, { includes } from "lodash"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import gmailService from "../service/gmailService"

var salt = bcrypt.genSaltSync(10);

const getAllProject = async () => {
    try {
        let data = await db.Projects.findAll({
            // // attributes: ["url", "description", "id"],
            include: [{
                model: db.Shippingunits, attributes: ["id", "NameUnit"],
                raw: true,
                include: {
                    model: db.Shipping_Cost
                },
            },
            {
                model: db.Saleschannels, attributes: ["name", "id"],

            }, {
                model: db.Customers

            },
            {
                model: db.Statusdeliverys,

            },
            {
                model: db.Provincecustomers,

            },
            {
                model: db.Districtcustomers,

            },
            {
                model: db.Wardcustomers,

            },
            {
                model: db.Statuspayments,

            },
            {
                model: db.Images,
                through: { attributes: [] }

            },

            ],
            raw: true,
            nest: true,
        })
        return {
            EM: " get Project ok",
            EC: "0",
            DT: data,
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPagination = async (page, limit, createBy) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Projects.findAndCountAll({
            where: { createdBy: createBy },
            include: [{
                model: db.Statuspayments

            },
            {
                model: db.Saleschannels, attributes: ["name", "id"],

            },
            {
                model: db.Statusdeliverys,

            },
            {
                model: db.Warehouses,

            }
            ],

            order: [['id', 'DESC']],
            offset: offset,
            limit: limit,
            raw: true,
            nest: true
        },
        )


        let totalPage = Math.ceil(count / limit)

        let data = {
            totalProject: count,
            totalPage: totalPage,
            dataProject: rows

        }
        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getProjects = async (id) => {
    try {
        let data = await db.Projects.findAll({
            where: { id: id },

            include: [
                {
                    model: db.Shippingunits, attributes: ["id", "NameUnit"],
                    include: {
                        model: db.Shippingcosts
                    },
                },
                {
                    model: db.Saleschannels,
                    attributes: ["name", "id"],

                }, {
                    model: db.Customers

                },
                {
                    model: db.Statusdeliverys,
                },
                {
                    model: db.Warehouses,
                },
                {
                    model: db.Statuspayments,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },
                {
                    model: db.Statuswarehouses,

                },
                {
                    model: db.Statuspickups,

                },

                {
                    model: db.Statusreceivedmoneys,

                },

            ],
            raw: true,
            nest: true
        }
        )
        if (data) {
            return {
                EM: "get Project success",
                EC: "0",
                DT: data

            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const createProjects = async (data) => {
    try {
        if (data) {
            let project = await db.Projects.create({
                order: data.order,
                warehouse_id: data.name_Product,
                quantity: data.number,
                money: data.money,
                statuspayment_id: data.StatusPaymentId,
                shippingunit_id: data.shippingUnitId,
                total: data.total,
                totalWithShippingCost: data.totalWithShippingCost,
                From_address: data.From_address,
                To_address: data.To_address,
                createdBy: data.createdBy,
                name_customer: data.customer_name,
                age_customer: data.age,
                Note: data.note,
                createdByName: data.createdByName,
                phoneNumber_customer: data.customer_name_phone,
                addressDetail: data.detail_address_customer,
                provincecustomer_id: data.Province_customer,
                districtcustomer_id: data.District_customer,
                wardcustomer_id: data.Ward_customer,
                saleschannel_id: data.salesChannel,
                Notemore: data.Note_More,
                shipping_Cost: data.shipping_Cost,
                Pricedrop: data.price_drop,
                paid: data.paid,
                addressprovince_id: data.Province_of_receipt,
                addressdistrict_id: data.District_of_receipt,
                addressward_id: data.Ward_of_receipt,
                Detail_Place_of_receipt: data.Detail_Place_of_receipt,
                flag: data.flag,
                done_status: data.done_status,
                statuspickup_id: 0,
                statuswarehouse_id: 0,
                statusdelivery_id: 0,
                statusreceivedmoney_id: 0,
                unit: data.unit,
                unit_money: data.unit_money,
                Mode_of_payment: data.Mode_of_payment,
                Main_Account: data.Main_Account,
                name_account: data.name_account,
                Bank_name: data.Bank_name,


            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: project,
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const getSalesChannel = async () => {
    try {


        let data = await db.Saleschannels.findAll({
            order: [['name', 'DESC']]
        })
        return {
            EM: " get Sales_Channel success",
            EC: "0",
            DT: data,
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllStatusPayment = async () => {
    try {


        let data = await db.Statuspayments.findAll({
        })
        return {
            EM: " get Status_Payment success",
            EC: "0",
            DT: data,
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithId = async (data) => {
    try {
        if (!data) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        await db.Projects.update(

            {
                id: data.id,
                quantity: data.quantity,
                money: data.money,
                statuspayment_id: data.statuspayment_id,
                shippingunit_id: data.shippingunit_id,
                total: data.total,
                totalWithShippingCost: data.totalWithShippingCost,
                From_address: data.From_address,
                To_address: data.To_address,
                name_customer: data.name_customer,
                age_customer: data.age_customer,
                Note: data.Note,
                phoneNumber_customer: data.phoneNumber_customer,
                addressDetail: data.addressDetail,
                provincecustomer_id: data.provincecustomer_id,
                districtcustomer_id: data.districtcustomer_id,
                wardcustomer_id: data.wardcustomer_id,
                saleschannel_id: data.saleschannel_id,
                Notemore: data.Notemore,
                shipping_Cost: data.shipping_Cost,
                Pricedrop: data.Pricedrop,
                paid: data.paid,
                addressprovince_id: data.addressprovince_id,
                addressdistrict_id: data.addressdistrict_id,
                addressward_id: data.addressward_id,
                Detail_Place_of_receipt: data.Detail_Place_of_receipt,
                flag: data.flag,
                done_status: data.done_status,
                unit: data.unit,
                unit_money: data.unit_money,
                Mode_of_payment: data.Mode_of_payment,
                Main_Account: data.Main_Account,
                name_account: data.name_account,
                Bank_name: data.Bank_name,
            },

            {
                where: { id: data.id },

            }
        )
        return {
            EM: " Update Project Success",
            EC: "0",
            DT: "",
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const RemoveProject = async (id) => {
    try {
        await db.Projects.destroy({
            where: { id: id }
        })
        return {
            EM: "Delete Projects success",
            EC: 0,
            DT: []

        }
    } catch (error) {
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }

}
const createChat = async (data) => {
    try {
        if (data) {
            let project = await db.Chats.create({
                project_id: data.ProductId,
                image: data.image,
                text: data.chatContent,
                CreatedByName: data.CreatedByName,
                CreatedByPhone: data.CreatedByPhone,
            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: project,
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const updateChat = async (data) => {
    try {
        if (!data) {
            return {
                EM: "do not data to edit",
                EC: "1",
                DT: "",
            }
        }
        await db.Chats.update(
            {

                text: data.text,

            },
            {
                where: { id: data.id, project_id: data.projectId },
            }
        )
        return {
            EM: " Edit chat Success",
            EC: "0",
            DT: "",
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const RemoveChatProject = async (id) => {
    try {
        await db.Chats.destroy({
            where: { id: id }
        })
        return {
            EM: "Delete Chat success",
            EC: 0,
            DT: []

        }

    } catch (error) {
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }

}
const getDataSearch = async (text, phone) => {
    try {
        let Alldata = await db.Projects.findAll(
            {
                where: { createdBy: phone },

                include: [
                    {
                        model: db.Saleschannels,
                        attributes: ["name", "id"],

                    },
                    {
                        model: db.Statusdeliverys,
                    },
                    {
                        model: db.Warehouses,
                    },
                    {
                        model: db.Statuspayments,

                    },


                ],
                raw: true,
                nest: true

            }



        )
        if (text) {
            const AlldataSearch = Alldata.filter(item => item?.total?.includes(text) ||
                item?.name_customer?.includes(text) ||
                item?.order?.includes(text) ||
                moment(`${item?.createdAt}`).format("DD/MM/YYYY").includes(text) ||
                item?.Warehouse?.product?.includes(text)

            )
            return {
                EM: " get data search success",
                EC: "0",
                DT: AlldataSearch,
            }
        } else {
            return {
                EM: " not Found   ",
                EC: "0",
                DT: [],
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getDataSearchWithtime = async (startDate, endDate, phone) => {
    try {
        let allProject = await db.Projects.findAll(
            {
                where: { createdBy: phone },

                include: [
                    {
                        model: db.Saleschannels,
                        attributes: ["name", "id"],

                    },
                    {
                        model: db.Statusdeliverys,
                    },
                    {
                        model: db.Warehouses,
                        attributes: ["product"],
                    },
                    {
                        model: db.Statuspayments,

                    },


                ],
                raw: true,
                nest: true

            },
        )
        let ProjectWithTimeDDXXYYYY = []
        allProject.forEach((item) => {
            ProjectWithTimeDDXXYYYY.push({ ...item })

        });

        if (!startDate && !endDate) {
            return {
                EM: "Not Found",
                EC: "1",
                DT: [],
            }
        }
        if (startDate === endDate) {
            let data = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === startDate)
            if (data) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: data,

                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }

            }
        }
        if (startDate !== endDate) {
            var date1 = new Date(moment(startDate, "DD-MM-YYYY"));
            var date2 = new Date(moment(endDate, "DD-MM-YYYY"));
            let data2 = []
            let datathree = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === endDate)
            const data = [...datathree]


            for (let i = 0; i < ProjectWithTimeDDXXYYYY.length; i++) {

                if (
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() > date1.getTime()
                    &&
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() < date2.getTime()
                ) {
                    data2.push(ProjectWithTimeDDXXYYYY[i])
                }

            }
            const NewData = [...data2, ...datathree]

            if (NewData) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: NewData,

                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }
            }

        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationAndStatusPayment = async (page, limit, createBy, statuspaymentId) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Projects.findAndCountAll({
            where: { createdBy: createBy, statuspayment_id: statuspaymentId },

            include: [{
                model: db.Statuspayments

            },
            {
                model: db.Saleschannels, attributes: ["name", "id"],

            },
            {
                model: db.Statusdeliverys,

            },
            {
                model: db.Warehouses,
                attributes: ["product"],
            },
            ],

            order: [['id', 'DESC']],
            offset: offset,
            limit: limit,
            raw: true,
            nest: true


        },

        )


        let totalPage = Math.ceil(count / limit)

        let data = {
            totalProject: count,
            totalPage: totalPage,
            dataProject: rows

        }
        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationAndStatusDeliveryNull = async (page, limit, createBy, statusdeliveryId) => {
    try {
        if (statusdeliveryId) {
            let offset = (page - 1) * limit;
            const { count, rows } = await db.Projects.findAndCountAll({
                where: { createdBy: createBy, statusdelivery_id: +statusdeliveryId },

                include: [{
                    model: db.Statuspayments

                },
                {
                    model: db.Saleschannels, attributes: ["name", "id"],

                },
                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Warehouses,

                },
                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true

            },


            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        } else {
            let offset = (page - 1) * limit;
            const { count, rows } = await db.Projects.findAndCountAll({
                where: { createdBy: createBy, statusdelivery_id: null },

                include: [{
                    model: db.Statuspayments

                },
                {
                    model: db.Saleschannels, attributes: ["name", "id"],

                },
                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Warehouses,

                },
                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true

            },


            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProductName = async () => {
    try {
        let data = await db.Warehouses.findAll({
            raw: true,

        })
        if (data) {
            return {
                EM: "  ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllnumberProduct = async (id) => {
    try {
        if (!id) {
            return {
                EM: "Not Found",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Warehouses.findOne({
            where: { id: id },
            attributes: ["product_number"],
            raw: true
        })
        if (data) {
            return {
                EM: " get number product  ok",
                EC: "0",
                DT: data,
            }
        }

    } catch (error) {
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}
const getAllwarehhouseWithPagination = async (page, limit, createdBy) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Warehouses.findAndCountAll({
            where: { createdBy: createdBy },
            include: [{
                model: db.Productstatusses

            }],
            order: [['id', 'DESC']],
            offset: offset,
            limit: limit,
            raw: true,
            nest: true

        },
        )
        let totalPage = Math.ceil(count / limit)

        let data = {
            totalProduct: count,
            totalPage: totalPage,
            dataProduct: rows

        }
        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const createdUserIdAndProjectId = async (ProjectId, UserId) => {
    try {
        if (ProjectId, UserId) {

            await db.Project_Users.create({
                project_id: ProjectId,
                user_id: UserId
            })
            return {
                EM: " Created  Success",
                EC: "0",
                DT: [],
            }
        }
    } catch (error) {
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }
}
const createWarehouseProduct = async (data) => {
    try {
        if (data) {
            let project = await db.Warehouses.create({
                product: data.Product,
                product_number: data.Number,
                product_cost: data.Product_Prince,
                productstatuss_id: data.product_statusId > 0 ? data.product_statusId : 1,
                Suppliers: data.Suppliers,
                unit: data.unit,
                unitMoney: data.unitMoney,
                Suppliers_address: data.Suppliers_address,
                Suppliers_phone: data.Suppliers_phone,
                image: data.image,
                createdBy: data.createdBy
            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: project,
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const updateProductInWarehouse = async (data) => {
    try {
        if (!data) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let Warehouse = await db.Warehouses.findOne({
            where: { id: data.id },
        })

        if (Warehouse) {
            await db.Warehouses.update({
                product: data.Product,
                product_number: data.Number,
                product_cost: data.Product_Prince,
                productstatuss_id: data.product_statusId,
                Suppliers: data.Suppliers,
                unit: data.unit,
                unitMoney: data.unitMoney,
                Suppliers_address: data.Suppliers_address,
                Suppliers_phone: data.Suppliers_phone,
                image: data.image

            },
                {
                    where: { id: data.id },

                }
            )
            return {
                EM: " Update Warehouse Success",
                EC: "0",
                DT: "",
            }
        } else {
            return {
                EM: " Product in warehouse Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateNumberProductInWarehouse = async (id, number) => {
    try {
        if (!+id) {


            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let Warehouse = await db.Warehouses.findOne({
            where: { id: id },
        })

        if (Warehouse && number > 0) {
            await db.Warehouses.update(
                {
                    product_number: number,
                    productstatuss_id: 4

                },
                {
                    where: { id: id },
                }

            )

            return {
                EM: " Update Number Success",
                EC: "0",
                DT: "",
            }
        } else if (Warehouse && number === 0) {
            await db.Warehouses.update(
                {
                    product_number: number,
                    productstatuss_id: 2

                },
                {
                    where: { id: id },
                }

            )
            return {
                EM: " Update Number Success",
                EC: "0",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getNumberInWarehouse = async (id) => {
    try {
        if (!id) {
            return {
                EM: "Not Found",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Warehouses.findOne({
            where: { id: id },
            attributes: ["id", "product_number"],
            raw: true
        })
        if (data) {
            return {
                EM: " get Prinse ok",
                EC: "0",
                DT: data,
            }
        }

    } catch (error) {
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}
const getDataSearchWarehouse = async (data) => {
    try {
        let Alldata = await db.Warehouses.findAll(
            {
                include: [{
                    model: db.Productstatusses

                }],
                raw: true,
                nest: true
            }
        )
        if (data) {
            const AlldataSearch = Alldata.filter(item =>
                item.product.includes(data) ||
                item.product_number.includes(data) ||
                item.product_cost.includes(data) ||
                item.Suppliers.includes(data) ||
                item.Suppliers_address.includes(data) ||
                item.Suppliers_phone.includes(data)
            )
            return {
                EM: " get data search success",
                EC: "0",
                DT: AlldataSearch,
            }
        } else {
            return {
                EM: " not Found   ",
                EC: "0",
                DT: [],
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getataWarehouseWithPaginationAndAllStatusProduct = async (createdBy) => {
    try {

        let data = await db.Warehouses.findAll({
            where: { createdBy: createdBy },

        })
        if (data) {
            let newArr = []
            const AllProduct = data.length
            const productstatuss_id1 = data.filter(item => item.productstatuss_id === 1)
            const productstatuss_id2 = data.filter(item => item.productstatuss_id === 2)
            const productstatuss_id3 = data.filter(item => item.productstatuss_id === 3)
            const productstatuss_id4 = data.filter(item => item.productstatuss_id === 4)
            newArr.push({
                AllProduct: AllProduct,
                productstatuss_id1: productstatuss_id1.length,
                productstatuss_id2: productstatuss_id2.length,
                productstatuss_id3: productstatuss_id3.length,
                productstatuss_id4: productstatuss_id4.length
            })

            return {
                EM: " get data  success",
                EC: "0",
                DT: newArr,
            }

        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getProductByStatusInWarehouse = async (page, limit, createdBy, statusProductId) => {
    try {
        if (!statusProductId) {
            return {
                EM: " Not Found",
                EC: "-2",
                DT: [],
            }
        }
        if (statusProductId) {
            let offset = (page - 1) * limit;
            const { count, rows } = await db.Warehouses.findAndCountAll({
                where: { createdBy: createdBy, productstatuss_id: statusProductId },

                include: [{
                    model: db.Productstatusses

                }],
                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,

                raw: true,
                nest: true
            },
            )
            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProduct: count,
                totalPage: totalPage,
                dataProduct: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }

        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllAllWarehouseDashboard = async (createdBy) => {
    try {
        let data = await db.Warehouses.findAll({
            where: { createdBy: createdBy },
            raw: true

        })
        return {
            EM: " get data ok",
            EC: "0",
            DT: data,
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllWarehouseDashboardWithTime = async (createdBy, startDate, endDate) => {
    try {

        let data = await db.Warehouses.findAll({
            where: { createdBy: createdBy },


        })
        let ProjectWithTimeDDXXYYYY = []
        data.forEach((item) => {
            ProjectWithTimeDDXXYYYY.push({ ...item })

        });


        if (!startDate && !endDate) {
            return {
                EM: "Not Found",
                EC: "1",
                DT: [],
            }
        }

        if (startDate === endDate) {

            let data = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === startDate)
            let newArrayOne = []
            data.forEach((item) => {
                newArrayOne.push({ id: item.id, createdAt: moment(`${item.createdAt}`).format("DD-MM-YYYY") })
            })
            const newArrayTwo = _.countBy(newArrayOne, 'createdAt')
            const array = _.map(newArrayTwo, (val, id) => {


                return { ...val, Time: id, number: val };
            });
            if (array) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: array


                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }
            }
        }
        if (startDate !== endDate) {
            var date1 = new Date(moment(startDate, "DD-MM-YYYY"));
            var date2 = new Date(moment(endDate, "DD-MM-YYYY"));
            let datathree = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === endDate)

            let data2 = []
            let newArr = [...datathree]


            for (let i = 0; i < ProjectWithTimeDDXXYYYY.length; i++) {

                if (
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() > date1.getTime()
                    &&
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() < date2.getTime()
                ) {
                    data2.push(ProjectWithTimeDDXXYYYY[i])
                }

            }
            const newArray = [...data2, ...newArr]

            let newArrayOne = []
            newArray.forEach((item) => {
                newArrayOne.push({ id: item.id, createdAt: moment(`${item.createdAt}`).format("DD-MM-YYYY") })
            })

            const data = _.countBy(newArrayOne, 'createdAt')
            const array = _.map(data, (val, id) => {


                return { ...val, Time: id, number: val };
            });
            if (array) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: array


                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }
            }

        }




    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllWarehouseDashboardWithMoney = async (createdBy) => {
    try {

        let data = await db.Warehouses.findAll({
            where: { createdBy: createdBy },
            attributes: ["id", "product_cost", "product_number", "productstatuss_id"],

        })
        if (data) {
            const res = data.filter(item => item.productstatuss_id !== 3)
            let newArr = []
            let num = 0

            res.forEach((item) => {
                let total = item.product_cost * item.product_number
                newArr.push(total)
            })
            newArr.forEach((item) => {
                num += item
            })

            return {
                EM: " get data  success",
                EC: "0",
                DT: num,
            }
        }





    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const CreateImageInWarehouse = async (image, Product, Product_Prince, Number, Suppliers, unit, unitMoney, Suppliers_address, productstatuss_id, createdBy, Suppliers_phone) => {
    try {
        if (image, Product, Product_Prince, Number, Suppliers, Suppliers_address, productstatuss_id, createdBy, Suppliers_phone) {
            let project = await db.Warehouses.create({
                product: Product,
                product_number: Number,
                product_cost: Product_Prince,
                productstatuss_id: productstatuss_id,
                Suppliers: Suppliers,
                unit: unit,
                unitMoney: unitMoney,
                Suppliers_address: Suppliers_address,
                Suppliers_phone: Suppliers_phone,
                image: image,
                createdBy: createdBy
            })
            return {
                EM: "Create ok",
                EC: "0",
                DT: project,
            }
        }




    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const UpdateImageInWarehouse = async (id, image, Product, Product_Prince, Number, Suppliers, unit, unitMoney, Suppliers_address, product_statusId, createdBy, Suppliers_phone) => {
    try {
        let Warehouse = await db.Warehouses.findOne({
            where: { id: +id },
        })
        if (Warehouse) {
            await db.Warehouses.update(
                {
                    product: Product,
                    product_number: Number,
                    product_cost: Product_Prince,
                    productstatuss_id: product_statusId,
                    Suppliers: Suppliers,
                    unit: unit,
                    unitMoney: unitMoney,
                    Suppliers_address: Suppliers_address,
                    Suppliers_phone: Suppliers_phone,
                    image: image,
                    createdBy: createdBy
                },
                {
                    where: { id: Warehouse.id },
                }
            )
            return {
                EM: "update  ok",
                EC: "0",
                DT: Warehouse,
            }
        }




    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const getAllDataProductDashboard = async (createdBy) => {
    try {
        let dataWarehouse = await db.Warehouses.findAll({
            attributes: ["id", "product"],
            raw: true

        })
        let data = await db.Projects.findAll({
            where: { createdBy: createdBy },



        })
        if (data) {
            let arr = []
            let arr1 = []
            let sum = 0
            const allProduct = data.length
            const doneStatus = data.filter(item => item.statusdelivery_id === 1)
            const notDoneStatus = data.filter(item => item.done_status === "0")
            const cancelStatus = data.filter(item => item.statusdelivery_id === 3)

            doneStatus.forEach((item) => {
                sum += +item.total
            })

            const dataUser = _.countBy(data, 'phoneNumber_customer')
            let max_buy = Object.keys(dataUser).reduce(function (a, b) { return dataUser[a] > dataUser[b] ? a : b });
            const dataProductId = _.countBy(data, 'warehouse_id')
            let max_seller = Object.keys(dataProductId).reduce(function (a, b) { return dataProductId[a] > dataProductId[b] ? a : b });
            for (let i = 0; i < dataWarehouse.length; i++) {
                if (dataWarehouse[i].id === +max_seller) {
                    arr1.push(dataWarehouse[i].product)
                }
            }
            arr.push({
                all_product: allProduct,
                done_Product: doneStatus.length,
                not_done_Product: notDoneStatus.length,
                cancel_Status: cancelStatus.length,
                allUser: Object.keys(dataUser).length,
                bestBuy_Phone: max_buy,
                all_productId_buy: Object.keys(dataProductId).length,
                best_seller: arr1.toString(),
                total: sum

            })
            return {
                EM: " get data ok",
                EC: "0",
                DT: arr,
            }

        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllDataProductDashboardByAge = async (createdBy) => {
    try {

        let data = await db.Projects.findAll({
            where: { createdBy: createdBy },
            attributes: ["age_customer"],



        })
        if (data) {
            let arr = []
            const all = data.length
            const under18age = data.filter(item => +item.age_customer < 18).length
            const From18AgeTo30Age = data.filter(item => +item.age_customer >= 18 && +item.age_customer < 30).length
            const From30AgeTo50Age = data.filter(item => +item.age_customer >= 30 && +item.age_customer < 50).length
            const over50age = data.filter(item => +item.age_customer >= 50).length

            arr.push({
                under_18: +under18age / +all * 100,
                From18AgeTo30Age: +From18AgeTo30Age / +all * 100,
                From30AgeTo50Age: +From30AgeTo50Age / +all * 100,
                over50age: +over50age / +all * 100,

            })
            return {
                EM: " get data ok",
                EC: "0",
                DT: arr,
            }

        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProductDashboardWithTime = async (createdBy, startDate, endDate) => {
    try {

        let data = await db.Projects.findAll({
            where: { createdBy: createdBy },
            attributes: ["id", "createdAt"],
            raw: true

        })
        let ProjectWithTimeDDXXYYYY = []
        data.forEach((item) => {
            ProjectWithTimeDDXXYYYY.push({ ...item })

        });


        if (!startDate && !endDate) {
            return {
                EM: "Not Found",
                EC: "1",
                DT: [],
            }
        }

        if (startDate === endDate) {

            let data = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === startDate)
            let newArrayOne = []
            data.forEach((item) => {
                newArrayOne.push({ id: item.id, createdAt: moment(`${item.createdAt}`).format("DD-MM-YYYY") })
            })
            const newArrayTwo = _.countBy(newArrayOne, 'createdAt')
            const array = _.map(newArrayTwo, (val, id) => {


                return { ...val, Time: id, number: val };
            });
            if (array) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: array


                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }
            }
        }
        if (startDate !== endDate) {
            var date1 = new Date(moment(startDate, "DD-MM-YYYY"));
            var date2 = new Date(moment(endDate, "DD-MM-YYYY"));
            let datathree = ProjectWithTimeDDXXYYYY.filter(item => moment(`${item.createdAt}`).format("DD-MM-YYYY") === endDate)

            let data2 = []
            let newArr = [...datathree]


            for (let i = 0; i < ProjectWithTimeDDXXYYYY.length; i++) {

                if (
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() > date1.getTime()
                    &&
                    new Date(moment(ProjectWithTimeDDXXYYYY[i].createdAt, "DD-MM-YYYY")).getTime() < date2.getTime()
                ) {
                    data2.push(ProjectWithTimeDDXXYYYY[i])
                }

            }
            const newArray = [...data2, ...newArr]

            let newArrayOne = []
            newArray.forEach((item) => {
                newArrayOne.push({ id: item.id, createdAt: moment(`${item.createdAt}`).format("DD-MM-YYYY") })
            })

            const data = _.countBy(newArrayOne, 'createdAt')
            const array = _.map(data, (val, id) => {


                return { ...val, Time: id, number: val };
            });
            if (array) {
                return {
                    EM: " success",
                    EC: "0",
                    DT: array


                }
            } else {
                return {
                    EM: "Not Found",
                    EC: "1",
                    DT: [],
                }
            }

        }




    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProductDashboardWithMounth = async (createdBy) => {
    try {

        let data = await db.Projects.findAll({
            where: { createdBy: createdBy },
            attributes: ["id", "createdAt"],
            raw: true

        })
        let newArr = []
        const all = data.filter(item => moment(`${item.createdAt}`).format("YYYY") == moment().year())
        const oneMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 1)
        const twoMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 2)
        const threeMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 3)
        const fourMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 4)
        const fiveMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 5)
        const sixMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 6)
        const sevenMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 7)
        const eightMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 8)
        const nightMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 9)
        const tenMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 10)
        const elevenMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 11)
        const twelveMounth = all.filter(item => +moment(`${item.createdAt}`).format("MM") == 12)
        newArr.push({
            tháng_1: oneMounth.length,
            tháng_2: twoMounth.length,
            tháng_3: threeMounth.length,
            tháng_4: fourMounth.length,
            tháng_5: fiveMounth.length,
            tháng_6: sixMounth.length,
            tháng_7: sevenMounth.length,
            tháng_8: eightMounth.length,
            tháng_9: nightMounth.length,
            tháng_10: tenMounth.length,
            tháng_11: elevenMounth.length,
            tháng_12: twelveMounth.length,

        })



        return {
            EM: " success",
            EC: "0",
            DT: newArr


        }




    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProductDashboardWithCutomer = async (createdBy) => {
    try {

        let data = await db.Projects.findAll({
            where: { createdBy: createdBy },
            attributes: ["id", "phoneNumber_customer"],



        })
        if (data) {
            const newArrayTwo = _.countBy(data, 'phoneNumber_customer')
            const array = _.map(newArrayTwo, (val, id) => {


                return { ...val, User_phone: id, number_shopping: val };
            });
            return {
                EM: " success",
                EC: "0",
                DT: array


            }

        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployer = async (page, limit, unit) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;

            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit },

                include: [
                    {
                        model: db.Warehouses,
                    },
                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Addressprovinces,
                    },
                    {
                        model: db.Addressdistricts,
                    },
                    {
                        model: db.Addresswards,
                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                nest: true,
                raw: true

            },
            )

            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerWithFlag = async (unit) => {
    try {

        let data = await db.Projects.findAll({
            where: { shippingunit_id: +unit, flag: 1 },
            include: [
                {
                    model: db.Warehouses,
                },

                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Statuswarehouses,

                },
                {
                    model: db.Statusreceivedmoneys,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Statuspayments,

                },

                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },
            ],
            raw: true,
            nest: true

        })
        if (data) {
            const result = data.filter(item => item.flag === 1)




            return {
                EM: " success",
                EC: "0",
                DT: result


            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithEmployerWithId = async (data) => {
    try {
        if (!data.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let abc = await db.Projects.findOne({
            where: { shippingunit_id: +data.unit, id: data.id },

        })
        if (abc) {
            await db.Projects.update(
                {
                    flag: data.flag
                },
                {
                    where: { shippingunit_id: +data.unit, id: data.id },

                })

            return {
                EM: "Update  Success",
                EC: "0",
                DT: "",
            }



        } else {
            return {
                EM: " Project Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerPickup = async (page, limit, unit, number) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {
            if (number) {
                let offset = (page - 1) * limit;
                const { count, rows } = await db.Projects.findAndCountAll({
                    where: { shippingunit_id: +unit, addressprovince_id: +number },

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },


                    ],

                    order: [['id', 'DESC']],
                    offset: offset,
                    limit: limit,
                    raw: true,
                    nest: true

                },
                )


                let totalPage = Math.ceil(count / limit)

                let data = {
                    totalProject: count,
                    totalPage: totalPage,
                    dataProject: rows

                }
                return {
                    EM: " ok",
                    EC: "0",
                    DT: data,
                }
            } else {

                let offset = (page - 1) * limit;
                const { count, rows } = await db.Projects.findAndCountAll({
                    where: { shippingunit_id: +unit },
                    distinct: true,

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },


                    ],

                    order: [['id', 'DESC']],
                    offset: offset,
                    limit: limit,
                    raw: true,
                    nest: true

                },
                )


                let totalPage = Math.ceil(count / limit)

                let data = {
                    totalProject: count,
                    totalPage: totalPage,
                    dataProject: rows

                }
                return {
                    EM: " ok",
                    EC: "0",
                    DT: data,
                }
            }
        } else {

            return {
                EM: " Not found",
                EC: "-1",
                DT: [],
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerWithUsername = async (unit, Username, Phone) => {
    try {

        let data = await db.Projects.findAll({
            where: {
                shippingunit_id: unit, User_PickUp: Username, Number_PickUp: Phone, statuspickup_id: 1
            },
            include: [
                {
                    model: db.Warehouses,
                },
                {
                    model: db.Statusreceivedmoneys,

                },
                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Statuswarehouses,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Statuspayments,

                },

                {
                    model: db.Statuspickups,

                },

                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },


            ],
            raw: true,
            nest: true
        })
        if (data) {




            return {
                EM: " success",
                EC: "0",
                DT: data


            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithEmployerPickup = async (data) => {
    try {
        if (!data.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let abc = await db.Projects.findOne({
            where: { shippingunit_id: +data.unitId, id: +data.id },

        })

        if (abc) {
            await db.Projects.update({
                User_PickUp: data.username,
                Number_PickUp: data.phone,
                statuspickup_id: data.status_pickup_Id,
                pickup_time: data.pickup_time,
                pickupDone_time: data.pickupDone_time
            },
                {
                    where: { shippingunit_id: +data.unitId, id: +data.id },

                }

            )


            return {
                EM: "Update Success",
                EC: "0",
                DT: abc,
            }



        } else {
            return {
                EM: " Project Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerWarehouse = async (page, limit, unit) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;
            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit, statuspickup_id: 2 },
                distinct: true,
                include: [
                    {
                        model: db.Warehouses,
                    },

                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true
            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerWarehouseWithUsername = async (unit, Username, Phone) => {
    try {


        let data = await db.Projects.findAll({
            where: { shippingunit_id: +unit, User_Warehouse: Username, Number_Warehouse: Phone, statuswarehouse_id: 1 },
            include: [
                {
                    model: db.Warehouses,
                },

                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Statusreceivedmoneys,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Statuspayments,

                },
                {
                    model: db.Statuswarehouses,

                },

                {
                    model: db.Statuspickups,

                },

                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },


            ],
            raw: true,
            nest: true

        })
        if (data) {

            return {
                EM: " success",
                EC: "0",
                DT: data


            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithEmployerWarehouse = async (item) => {
    try {
        if (!item.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let abc = await db.Projects.findOne({
            where: { shippingunit_id: +item.unitId, id: +item.id },

        })

        if (abc) {
            await db.Projects.update({
                Status_product: item.StatusProduct,
                User_Warehouse: item.username,
                Number_Warehouse: item.phone,
                statuswarehouse_id: item.status_warehouse_Id,
                warehouse_time: item.warehouse_time,
                warehouseDone_time: item.warehouseDone_time
            },
                {
                    where: { shippingunit_id: +item.unitId, id: +item.id },
                }
            )

            return {
                EM: "Update  Success",
                EC: "0",
                DT: abc,
            }



        } else {
            return {
                EM: " Project Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerDelivery = async (page, limit, unit) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;
            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit, statuswarehouse_id: 2 },
                distinct: true,
                include: [
                    {
                        model: db.Warehouses,
                    },
                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true

            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {

        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerDeliveryWithUsername = async (unit, Username, Phone) => {
    try {


        let data = await db.Projects.findAll({
            where: { shippingunit_id: +unit, User_Delivery: Username, Number_Delivery: Phone, statusdelivery_id: 1 },
            include: [
                {
                    model: db.Warehouses,
                },

                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Statusreceivedmoneys,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Statuspayments,

                },
                {
                    model: db.Statuswarehouses,

                },

                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },
            ],
            raw: true,
            nest: true


        })
        if (data) {
            return {
                EM: " success",
                EC: "0",
                DT: data


            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithEmployerDelivery = async (item) => {
    try {
        if (!item.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let abc = await db.Projects.findOne({
            where: { shippingunit_id: +item.unitId, id: +item.id },

        })

        if (abc) {
            await db.Projects.update({
                User_Delivery: item.username,
                Number_Delivery: item.phone,
                Cancel_reason: item.text,
                statusdelivery_id: +item.status_delivery,
                Notice_Delivery: item.textOne,
                Delivery_time: item.Delivery_time,
                DeliveryDone_time: item.DeliveryDone_time,
                Sub_money: item.Sub_money,
                receiveMoneyId: item.receiveMoneyId

            },
                {
                    where: { shippingunit_id: +item.unitId, id: +item.id },

                }
            )

            return {
                EM: "Update  Success",
                EC: "0",
                DT: abc,
            }



        } else {
            return {
                EM: " Project Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithEmployerWithAllStausPickUp = async (page, limit, unit, statuspickup) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;


            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit, statuspickup_id: +statuspickup },
                distinct: true,

                include: [
                    {
                        model: db.Warehouses,
                    },
                    {
                        model: db.Statusreceivedmoneys,

                    },

                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },

                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true

            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {

        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithEmployerWithAllStausWarehouse = async (page, limit, unit, statuswarehouse) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;


            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit, statuswarehouse_id: +statuswarehouse },
                distinct: true,

                include: [
                    {
                        model: db.Warehouses,
                    },

                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },
                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true

            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {

        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithEmployerWithAllStausDelivery = async (page, limit, unit, statusDelivery) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;


            const { count, rows } = await db.Projects.findAndCountAll({
                where: { shippingunit_id: +unit, statusdelivery_id: statusDelivery },
                distinct: true,

                include: [
                    {
                        model: db.Warehouses,
                    },

                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },
                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true
            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {

        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getNumberEmployer = async (unit) => {
    try {
        let data = await db.Projects.findAll({
            raw: true,
            where: { shippingunit_id: +unit },

        })
        if (data) {
            let arr = []
            let allNum = data.length
            let no_pick_up = data.filter(item => item.statuspickup_id === 0)
            let picking_up = data.filter(item => item.statuspickup_id === 1)
            let pickupOk = data.filter(item => item.statuspickup_id === 2)
            let no_warehouse = data.filter(item => item.statuswarehouse_id === 0)
            let warehouseStatusOne = data.filter(item => item.statuswarehouse_id === 1)
            let warehouseStatusTwo = data.filter(item => item.statuswarehouse_id === 2)
            let No_delivery = data.filter(item => item.statusdelivery_id === 0)
            let deliveryStatusOne = data.filter(item => item.statusdelivery_id === 1)
            let delivery_ok = data.filter(item => item.statusdelivery_id === 2)
            let delivery_cancel = data.filter(item => item.statusdelivery_id === 3)
            let delivery_again = data.filter(item => item.statusdelivery_id === 4)
            arr.push({
                allNum: allNum,
                no_pick_up: no_pick_up.length,
                picking_up: picking_up.length,
                pickupOk: pickupOk.length,
                no_warehouse: no_warehouse.length,
                warehouseStatusOne: warehouseStatusOne.length,
                warehouseStatusTwo: warehouseStatusTwo.length,
                No_delivery: No_delivery.length,
                deliveryStatusOne: deliveryStatusOne.length,
                delivery_ok: delivery_ok.length,
                delivery_cancel: delivery_cancel.length,
                delivery_again: delivery_again.length
            })
            return {
                EM: " ok",
                EC: "0",
                DT: arr,
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const showDataproductBySearchWithEmployer = async (data, positon, unit) => {


    try {
        let Alldata = await db.Projects.findAll(
            {
                where: { shippingunit_id: +unit },

                include: [
                    {
                        model: db.Warehouses,
                    },

                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },

                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],
                nest: true,
                raw: true
            }
        )
        if (Alldata) {
            if (!positon) {
                const AlldataSearch = Alldata.filter(item =>
                    item?.order?.includes(data) ||
                    item?.Warehouse?.product?.includes(data) ||
                    item?.name_customer.includes(data) ||
                    item?.User_PickUp?.includes(data) ||
                    item?.Number_PickUp?.includes(data) ||
                    item?.User_Warehouse?.includes(data) ||
                    item?.Number_Warehouse?.includes(data) ||
                    item?.User_Delivery?.includes(data) ||
                    item?.Number_Delivery?.includes(data) ||
                    item?.User_Overview?.includes(data) ||
                    item?.Number_Overview?.includes(data) ||
                    moment(`${item?.createdAt}`).format("DD/MM/YYYY ").includes(data)




                )
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: AlldataSearch,
                }
            }

            if (positon === "Nhân viên lấy hàng") {
                const AlldataSearch = Alldata.filter(item =>
                    item?.order?.includes(data) ||
                    item?.Warehouse?.product?.includes(data) ||
                    item?.User_PickUp?.includes(data) ||
                    item?.Number_PickUp?.includes(data) ||
                    item?.Detail_Place_of_receipt?.includes(data) ||
                    item?.Addressward?.name?.includes(data) ||
                    item?.Addressdistrict?.name?.includes(data) ||
                    item?.Addressprovince?.name?.includes(data) ||
                    moment(`${item?.createdAt}`).format("DD/MM/YYYY ").includes(data) ||
                    moment(`${item?.pickup_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data) ||
                    moment(`${item?.pickupDone_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data)

                )
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: AlldataSearch,
                }
            }
            if (positon === "Nhân viên kho hàng") {
                const AlldataSearch = Alldata.filter(item =>
                    item?.order?.includes(data) ||
                    item?.Warehouse?.product?.includes(data) ||
                    item?.User_Warehouse?.includes(data) ||
                    item?.Number_Warehouse?.includes(data) ||
                    moment(`${item?.createdAt}`).format("DD/MM/YYYY").includes(data) ||
                    moment(`${item?.warehouse_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data) ||
                    moment(`${item?.warehouseDone_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data)
                )
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: AlldataSearch,
                }
            }
            if (positon === "Nhân viên giao hàng") {
                const AlldataSearch = Alldata.filter(item =>
                    item?.order?.includes(data) ||
                    item?.Warehouse?.product?.includes(data) ||
                    item?.name_customer?.includes(data) ||
                    item?.phoneNumber_customer?.includes(data) ||
                    item?.User_Delivery?.includes(data) ||
                    item?.Number_Delivery?.includes(data) ||
                    item?.addressDetail?.includes(data) ||
                    item?.Ward_customer?.name?.includes(data) ||
                    item?.Districtcustomer?.name?.includes(data) ||
                    item?.Provincecustomer?.name?.includes(data) ||
                    moment(`${item?.createdAt}`).format("DD/MM/YYYY").includes(data) ||
                    moment(`${item?.Delivery_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data) ||
                    moment(`${item?.DeliveryDone_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data)
                )
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: AlldataSearch,
                }
            }
            if (positon === "Nhân viên kế toán") {
                const AlldataSearch = Alldata.filter(item =>
                    item?.order?.includes(data) ||
                    item?.createdBy?.includes(data) ||
                    item?.createdByName?.includes(data) ||
                    item?.Mode_of_payment?.includes(data) ||
                    item?.Main_Account?.includes(data) ||
                    item?.Bank_name?.includes(data) ||
                    item?.name_account?.includes(data) ||
                    item?.User_Overview?.includes(data) ||
                    item?.Number_Overview?.includes(data) ||
                    item?.total?.includes(data) ||
                    moment(`${item?.createdAt}`).format("DD/MM/YYYY").includes(data) ||
                    moment(`${item?.Overview_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data) ||
                    moment(`${item?.OverviewDone_time}`).format("DD/MM/YYYY HH:mm:ss").includes(data)
                )
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: AlldataSearch,
                }
            }

        } else {
            return {
                EM: " not Found   ",
                EC: "0",
                DT: [],
            }
        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getDataproductWithStatus = async (unit, statuspickupId, statuswarehouseId, statusDeliveryId, receiveMoneyId) => {


    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }

        if (unit && statuspickupId && !statuswarehouseId && !statusDeliveryId && !receiveMoneyId) {
            let Alldata = await db.Projects.findAll(
                {
                    where: { shippingunit_id: +unit, statuspickup_id: +statuspickupId },

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },
                    ],
                    raw: true,
                    nest: true
                }
            )
            if (Alldata) {
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: Alldata,
                }
            }

        }
        if (unit && statuswarehouseId && !statuspickupId && !statusDeliveryId && !receiveMoneyId) {
            let Alldata = await db.Projects.findAll(
                {
                    where: { shippingunit_id: +unit, statuswarehouse_id: +statuswarehouseId },

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },


                    ],
                    raw: true,
                    nest: true
                }
            )
            if (Alldata) {
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: Alldata,
                }
            }

        }
        if (unit && statusDeliveryId && !statuspickupId && !statuswarehouseId && !receiveMoneyId) {
            let Alldata = await db.Projects.findAll(
                {
                    where: { shippingunit_id: +unit, statusdelivery_id: +statusDeliveryId },

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },


                    ],
                    raw: true,
                    nest: true
                }
            )
            if (Alldata) {
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: Alldata,
                }
            }

        }
        if (unit && receiveMoneyId && !statuspickupId && !statuswarehouseId && !statusDeliveryId) {
            let Alldata = await db.Projects.findAll(
                {
                    where: { shippingunit_id: +unit, statusreceivedmoney_id: +receiveMoneyId },

                    include: [
                        {
                            model: db.Warehouses,
                        },

                        {
                            model: db.Statusreceivedmoneys,

                        },
                        {
                            model: db.Statusdeliverys,

                        },
                        {
                            model: db.Statuswarehouses,

                        },
                        {
                            model: db.Provincecustomers,

                        },
                        {
                            model: db.Districtcustomers,

                        },
                        {
                            model: db.Wardcustomers,

                        },
                        {
                            model: db.Statuspayments,

                        },

                        {
                            model: db.Statuspickups,

                        },

                        {
                            model: db.Addressprovinces,

                        },
                        {
                            model: db.Addressdistricts,

                        },
                        {
                            model: db.Addresswards,

                        },


                    ],
                    raw: true,
                    nest: true
                }
            )
            if (Alldata) {
                return {
                    EM: " get data search success",
                    EC: "0",
                    DT: Alldata,
                }
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerOverview = async (page, limit, unit) => {
    try {
        if (!unit) {
            return {
                EM: " you can not access this page",
                EC: "1",
                DT: [],
            }
        }
        if (unit) {

            let offset = (page - 1) * limit;
            const { count, rows } = await db.Projects.findAndCountAll({
                where: {
                    shippingunit_id: +unit, statusdelivery_id: 2
                },
                raw: true,
                nest: true,
                include: [
                    {
                        model: db.Warehouses,
                    },

                    {
                        model: db.Statusdeliverys,

                    },
                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Statusreceivedmoneys,

                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Statuspayments,

                    },

                    {
                        model: db.Statuspickups,

                    },

                    {
                        model: db.Statuswarehouses,

                    },
                    {
                        model: db.Addressprovinces,

                    },
                    {
                        model: db.Addressdistricts,

                    },
                    {
                        model: db.Addresswards,

                    },


                ],

                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,


            },
            )


            let totalPage = Math.ceil(count / limit)

            let data = {
                totalProject: count,
                totalPage: totalPage,
                dataProject: rows

            }
            return {
                EM: " ok",
                EC: "0",
                DT: data,
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllProjectWithPaginationWithEmployerOverviewWithUsername = async (unit, Username, Phone) => {
    try {
        let data = await db.Projects.findAll({
            where: {
                shippingunit_id: +unit, User_Overview: Username, Number_Overview: Phone, statusreceivedmoney_id: 1
            },
            include: [
                {
                    model: db.Warehouses,
                },
                {
                    model: db.Statusreceivedmoneys,

                },
                {
                    model: db.Statusdeliverys,

                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Statuswarehouses,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Statuspayments,

                },

                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Statuspickups,

                },
                {
                    model: db.Addressprovinces,

                },
                {
                    model: db.Addressdistricts,

                },
                {
                    model: db.Addresswards,

                },


            ],
            raw: true,
            nest: true

        })
        if (data) {
            return {
                EM: " success",
                EC: "0",
                DT: data
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateProjectWithEmployerOverview = async (item) => {
    try {
        if (!item.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let abc = await db.Projects.findOne({
            where: { shippingunit_id: +item.unitId, id: +item.id },

        })

        if (abc) {
            await db.Projects.update(
                {
                    User_Overview: item.User_Overview,
                    Number_Overview: item.Number_Overview,
                    statusreceivedmoney_id: +item.receiveMoneyId,
                    Overview_time: item.Overview_time,
                    OverviewDone_time: item.OverviewDone_time,
                    done_status: item.done_status
                },
                {
                    where: { shippingunit_id: +item.unitId, id: +item.id }
                }

            )

            return {
                EM: "Update  Success",
                EC: "0",
                DT: abc,
            }



        } else {
            return {
                EM: " Project Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const createNotification = async (data) => {
    try {
        if (data) {
            let project = await db.Notifications.create({
                project_id: data.ProjectId,
                Order: data.Order,
                Change_content: data.Change_content,
                ChangeBy: data.ChangeBy,
                CreatedBy: data.CreatedBy,
                ViewByuser: data.ViewByuser,
                ViewByStaff: data.ViewByStaff,
                Unit: data.unit
            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: project,
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const getshowAllNotification = async (unit, user) => {
    try {
        if (user === "Dev") {

            let data = await db.Notifications.findAll({
                where: { Change_content: "thêm User" },
                order: [['createdAt', 'DESC']],

            })
            return {
                EM: " get Project ok",
                EC: "0",
                DT: data,
            }
        }
        if (unit < 1 || !unit) {
            let data = await db.Notifications.findAll({
                where: { CreatedBy: user },
                order: [['createdAt', 'DESC']],

            })
            return {
                EM: " get Project ok",
                EC: "0",
                DT: data,
            }
        }
        if (unit) {
            let data = await db.Notifications.findAll({
                where: { Unit: +unit },
                order: [['createdAt', 'DESC']],

            })
            return {
                EM: " get Project ok",
                EC: "0",
                DT: data,
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const updateStatusNotification = async (data) => {
    try {
        if (!data.id) {
            return {
                EM: "do not data to update",
                EC: "1",
                DT: "",
            }
        }
        let Notification = await db.Notifications.findOne({
            where: { id: +data.id },
        })
        if (Notification) {
            if (data.positon === "Customer") {
                await db.Notifications.update({
                    ViewByuser: 1,
                },
                    {
                        where: { id: +data.id },
                    }

                )
                return {
                    EM: " Update  Success",
                    EC: "0",
                    DT: "",
                }
            }
            if (data.positon === "Staff") {
                await db.Notifications.update(
                    {
                        ViewByStaff: 1,
                    },
                    {
                        where: { id: +data.id },
                    }

                )
                return {
                    EM: " Update  Success",
                    EC: "0",
                    DT: "",
                }
            }
            if (data.positon === "Dev") {
                await db.Notifications.update(
                    {
                        ViewByStaff: 1,
                    },
                    {
                        where: { id: +data.id },
                    }
                )
                return {
                    EM: " Update  Success",
                    EC: "0",
                    DT: "",
                }
            }

        } else {
            return {
                EM: "  Not Found",
                EC: "2",
                DT: "",
            }

        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const checkPassWord = (inputPassWord, hashPassWord) => {
    return bcrypt.compareSync(inputPassWord, hashPassWord)
}
const hashPassWord = (passwordInput) => {
    return bcrypt.hashSync(passwordInput, salt);
}
const UpdatePassWord = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: { phone: data.phone }
        })
        if (user) {
            let isCorrectPassword = checkPassWord(data.password, user.password)
            if (isCorrectPassword == true) {
                let hashPass = hashPassWord(data.newpassWord);
                if (data.password === data.newpassWord) {
                    return {
                        EM: "The new password is the same as the password, please change it",
                        EC: "2",
                        DT: "",
                    }
                } else {
                    await db.Users.update({
                        password: hashPass

                    },
                        {
                            where: { phone: data.phone }

                        }

                    )
                    return {
                        EM: "Update Success",
                        EC: "0",
                        DT: "",
                    }
                }

            } else {
                return {
                    EM: "Wrong password , please check again",
                    EC: "2",
                    DT: "",
                }
            }
        } else {
            return {
                EM: "  Not Found",
                EC: "2",
                DT: "",
            }

        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const ResetPassWord = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: { phone: data.phone, email: data.email }
        })
        if (user) {
            // 

            await db.Users.update(
                {
                    resetPasswordPin: data.pin
                },
                {
                    where: { phone: data.phone, email: data.email }
                }

            )
            await gmailService.SendEmail(data.emailReceiveOtp, data.pin)
            return {
                EM: "Verify ok",
                EC: "0",
                DT: "",
            }
        } else {
            return {
                EM: "Email or Phone number wrong , please check again",
                EC: "2",
                DT: "",
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const updateNewPass = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: { phone: data.phone, email: data.email }
        })


        if (data.otp === user.resetPasswordPin) {
            let hashPass = hashPassWord(data.PassWord);

            await db.Users.update(
                {
                    password: hashPass
                },
                {
                    where: { phone: data.phone, email: data.email }
                }
            )
            return {
                EM: "Reset Password ok",
                EC: "0",
                DT: "",
            }
        }
        if (data.otp !== user.resetPasswordPin) {

            return {
                EM: "Wrong Otp code or Otp expired  ",
                EC: "2",
                DT: "",
            }
        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const Check = async (item) => {
    try {
        let data = await db.Projects.findAll({
            where: {
                order: item.Order
            },
            raw: true
        })
        if (data.length > 0) {

            return {
                EM: "EXIST",
                EC: "0",
                DT: "",
            }
        } else {
            return {
                EM: "Not EXIST",
                EC: "1",
                DT: "",
            }
        }



    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

const UpdateNewImageChat = async (item) => {
    try {

        await db.Chats.update(
            {
                image: item.image,
            },
            {
                where: {
                    CreatedByPhone: item.phone
                },


            }

        )
        return {
            EM: "Ok",
            EC: "0",
            DT: "",
        }





    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

const GetChatProject = async (id) => {
    try {

        let data = await db.Chats.findAll(
            {
                where: {
                    project_id: id
                },
                order: [['id', 'DESC']],

            }

        )
        return {
            EM: "Ok",
            EC: "0",
            DT: data,
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

module.exports = {
    getAllProject, getAllProjectWithPagination, getProjects, createProjects, getSalesChannel, getAllStatusPayment,
    updateProjectWithId, RemoveProject, createChat, updateChat, RemoveChatProject, getDataSearch, getDataSearchWithtime,
    getAllProjectWithPaginationAndStatusPayment, getAllProjectWithPaginationAndStatusDeliveryNull, getAllProductName,
    getAllnumberProduct, createdUserIdAndProjectId, createdUserIdAndProjectId, getAllwarehhouseWithPagination,
    updateNumberProductInWarehouse, getNumberInWarehouse, updateProductInWarehouse,
    getDataSearchWarehouse, getataWarehouseWithPaginationAndAllStatusProduct, getProductByStatusInWarehouse,
    getAllAllWarehouseDashboard, getAllWarehouseDashboardWithTime, getAllWarehouseDashboardWithMoney,
    CreateImageInWarehouse, UpdateImageInWarehouse, getAllDataProductDashboard, getAllDataProductDashboardByAge,
    getAllProductDashboardWithTime, getAllProductDashboardWithMounth, getAllProductDashboardWithCutomer,
    getAllProjectWithPaginationWithEmployer, getAllProjectWithPaginationWithEmployerWithFlag, updateProjectWithEmployerWithId,
    getAllProjectWithPaginationWithEmployerPickup, getAllProjectWithPaginationWithEmployerWithUsername, updateProjectWithEmployerPickup,
    getAllProjectWithPaginationWithEmployerWarehouse, getAllProjectWithPaginationWithEmployerWarehouseWithUsername,
    updateProjectWithEmployerWarehouse, getAllProjectWithPaginationWithEmployerDelivery, getAllProjectWithPaginationWithEmployerDeliveryWithUsername,
    updateProjectWithEmployerDelivery, getAllProjectWithEmployerWithAllStausPickUp, getAllProjectWithEmployerWithAllStausWarehouse,
    getAllProjectWithEmployerWithAllStausDelivery, getNumberEmployer, showDataproductBySearchWithEmployer, getDataproductWithStatus,
    getAllProjectWithPaginationWithEmployerOverview, createWarehouseProduct, getAllProjectWithPaginationWithEmployerOverviewWithUsername,
    updateProjectWithEmployerOverview, createNotification, getshowAllNotification, updateStatusNotification, UpdatePassWord, ResetPassWord,
    updateNewPass, Check, UpdateNewImageChat, GetChatProject
}