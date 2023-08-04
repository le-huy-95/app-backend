import CrudUserService from "../service/CrudUserService"


const show = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;

            let data = await CrudUserService.getUserWithPagination(+page, +limit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await CrudUserService.getAllUser()
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}





const create = async (req, res) => {
    try {
        let data = await CrudUserService.createUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const update = async (req, res) => {
    try {
        let data = await CrudUserService.updateUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const remove = async (req, res) => {
    try {
        let data = await CrudUserService.deleteUser(req.body.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const showDataBySearch = async (req, res) => {
    try {

        let data = await CrudUserService.getDataSearchUser(req.query.data)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const showUserbyGroup = async (req, res) => {

    try {
        if (req.query.page && req.query.limit && req.query.GroupId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let GroupId = req.query.GroupId;
            let data = await CrudUserService.getUserWithPaginationbyGroupName(+page, +limit, +GroupId)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const finduserwithphone = async (req, res) => {

    try {
        if (req.query.phone) {
            let phone = req.query.phone;
            let data = await CrudUserService.getUserWithphone(phone)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const GetProfile = async (req, res) => {

    try {
        if (req.query.phone) {
            let phone = req.query.phone;
            let data = await CrudUserService.getUserWithphone(phone)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

module.exports = {
    show, create, update, remove, showDataBySearch, showUserbyGroup, finduserwithphone, GetProfile
}