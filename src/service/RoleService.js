import { raw } from "body-parser"
import db from "../models/index"

import { getGroupWithRole } from "../service/jwtService"

const creatNewGroup = async (roles) => {
    try {

        let CurrenRoles = await db.Roles.findAll({
            attributes: ["url", "description"],
            raw: true
        })
        // ham so sanh tim ra phan tu khac nhau giua 2arrary
        const results = roles.filter(({ url: url1 }) =>
            !CurrenRoles.some(({ url: url2 }) => url1 === url2))
        console.log('roles', CurrenRoles.length)

        if (results.length == 0) {
            return {
                EM: " nothing to Create or role already exist",
                EC: "0",
                DT: [],
            }
        } else {
            await db.Roles.bulkCreate(results)
            return {
                EM: `Create success ${results.length} roles `,
                EC: "1",
                DT: [],
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "-1",
            DT: [],
        }
    }
}
const getAllRole = async () => {
    try {
        let data = await db.Roles.findAll({
            attributes: ["url", "description", "id"],

        })
        console.log("48 -data", data)
        return {
            EM: " get Role ok",
            EC: "0",
            DT: data,
        }


    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const getAllRoleWithPaginate = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Roles.findAndCountAll(

            {
                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,


            },
        )
        let totalPage = Math.ceil(count / limit)
        let data = {
            totalUser: count,
            totalPage: totalPage,
            dataUser: rows
        }



        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const removeRole = async (id) => {
    try {
        let data = await db.Roles.destroy({
            where: { id: id }
        })
        return {
            EM: "Delete Role success",
            EC: 0,
            DT: []

        }


    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}
const fetchRoleByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: " groupId empty or not Exist",
                EC: "0",
                DT: [],
            }
        }

        let roles = await db.GroupRoles.findAll({
            where: { group_id: id },
        })
        return {
            EM: " get Role by group ok",
            EC: "0",
            DT: roles,
        }

    } catch (error) {
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }
}
const assignRoleToGroup = async (data) => {

    try {
        await db.GroupRoles.destroy({
            where: { group_id: +data.groupId }
        })
        await db.GroupRoles.bulkCreate(data.GroupRole)
        return {
            EM: " Change Role Success",
            EC: "0",
            DT: [],
        }
    } catch (error) {
        console.log("error", error)
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }
}

const EditRole = async (id, url, Description) => {
    try {


        await db.Roles.update(
            {
                url: url,
                description: Description
            },
            {
                where: { id: +id },
            })
        return {
            EM: " Update  Success",
            EC: "0",
            DT: "",
        }



    } catch (error) {
        console.log(error)
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
module.exports = {
    creatNewGroup, getAllRole, getAllRoleWithPaginate,
    removeRole, fetchRoleByGroup, assignRoleToGroup,
    EditRole
}