import RoleService from "../service/RoleService"


const AddRole = async (req, res) => {
    try {
        let data = await RoleService.creatNewGroup(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}



const ShowAllRole = async (req, res) => {

    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await RoleService.getAllRoleWithPaginate(+page, +limit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await RoleService.getAllRole()
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}


const showRole = async (req, res) => {
    try {
        let data = await RoleService.getAllRole()
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })

    }
}



const DeleteRole = async (req, res) => {
    try {
        let data = await RoleService.removeRole(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}


const getRoleByGroup = async (req, res) => {
    try {
        let id = req.params.groupId
        let data = await RoleService.fetchRoleByGroup(id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const assignToGroup = async (req, res) => {
    try {
        let data = await RoleService.assignRoleToGroup(req.body.data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}


const UpdateRole = async (req, res) => {
    try {
        let data = await RoleService.EditRole(+req.body.id, req.body.url, req.body.Description)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}
module.exports = {
    AddRole, ShowAllRole, DeleteRole, showRole, getRoleByGroup, assignToGroup, UpdateRole
}