import db from "../models/index"


const getAllGroup = async () => {
    try {


        let data = await db.Groups.findAll({
            order: [['name', 'DESC']]
        })
        return {
            EM: " get group success",
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
    getAllGroup
}