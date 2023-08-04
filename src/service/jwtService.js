import db from "../models/index"


const getGroupWithRole = async (user) => {
    // check quyen han nguoi dung co the vaof duoc cac duong link nao(role)
    let roles = await db.GroupRoles.findAll({
        where: { group_id: user.group_id },
        attributes: ["role"],


    })
    return roles ? roles : {};

}


const shippingUnit = async (id) => {
    let data = await db.Shippingunits.findOne({
        where: { id: id },
        attributes: ["NameUnit"],


    })
    return data ? data : {};

}


module.exports = {
    getGroupWithRole, shippingUnit
}