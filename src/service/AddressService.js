import db from "../models/index"



const getAllProvinceCustomer = async () => {
    try {
        let data = await db.Provincecustomers.findAll({
            raw: true

        })
        return {
            EM: " get Province ok",
            EC: "0",
            DT: data,
        }



    } catch (error) {
        console.log("error-20", error)

        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

const getAllProvince = async () => {
    try {
        let data = await db.Addressprovinces.findAll({
            raw: true

        })
        return {
            EM: " get Province ok",
            EC: "0",
            DT: data,
        }



    } catch (error) {
        console.log("error-43", error)
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllAddress_to = async () => {
    try {
        let data = await db.Addresstos.findAll({
            raw: true

        })
        return {
            EM: " get Address_To ok",
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
const getAllAddress_From = async () => {
    try {
        let data = await db.Addressfroms.findAll({
            raw: true

        })
        return {
            EM: " get Address_From ok",
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
const getDistrictCustomerByProvinceCustomer = async (id) => {
    try {

        if (!id) {
            return {
                EM: " Province empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Provincecustomers.findAll({
            where: { id: id },
            raw: true,
            nest: true,
            include: [{
                model: db.Districtcustomers,

            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        console.log("124 error", error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}

const getDistrictByProvince = async (id) => {
    try {

        // if (!id) {
        //     return {
        //         EM: " Province empty or not Exist",
        //         EC: "0",
        //         DT: [],
        //     }
        // }

        let data = await db.Addressprovinces.findAll({
            where: { id: id },
            raw: true,
            nest: true,
            include: [{
                model: db.Addressdistricts,

            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        console.log('error', error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}


const getWardCustomerByDistrictCustomer = async (id) => {
    try {

        if (!id) {
            return {
                EM: " District empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Districtcustomers.findAll({
            where: { id: id },
            raw: true,
            nest: true,
            include: [{
                model: db.Wardcustomers,
            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}
const getWardByDistrict = async (id) => {
    try {

        if (!id) {
            return {
                EM: " District empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let data = await db.Addressdistricts.findAll({
            where: { id: id },
            raw: true,
            nest: true,
            include: [{
                model: db.Addresswards,
            }],

        })
        return {
            EM: " get address information  ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }

}

module.exports = {
    getDistrictCustomerByProvinceCustomer, getWardCustomerByDistrictCustomer, getAllProvinceCustomer,
    getAllAddress_to, getAllAddress_From, getAllProvince, getDistrictByProvince, getWardByDistrict
}