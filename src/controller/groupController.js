import groupService from "../service/groupService"

const showGroup = async (req, res) => {
    try {
        let data = await groupService.getAllGroup()
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


module.exports = {
    showGroup
}