import AddressService from "../service/AddressService"

const showAllProvinceCutomer = async (req, res) => {
    try {

        let data = await AddressService.getAllProvinceCustomer()
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

const showAllProvince = async (req, res) => {
    try {

        let data = await AddressService.getAllProvince()
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

const showAllAddress_to = async (req, res) => {
    try {

        let data = await AddressService.getAllAddress_to()
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
const showAllAddress_from = async (req, res) => {
    try {

        let data = await AddressService.getAllAddress_From()
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


const showDistrictCustomerbyProvinceCustomer = async (req, res) => {
    try {
        let id = req.params.ProvinceCutomerId
        console.log("id", id)
        let data = await AddressService.getDistrictCustomerByProvinceCustomer(id)
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


const showDistrictbyProvince = async (req, res) => {
    try {
        let id = req.params.ProvinceId
        let data = await AddressService.getDistrictByProvince(id)
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

const showWardCustomerbyDistricCustomer = async (req, res) => {
    try {
        let id = req.params.DistrictCutomerId

        let data = await AddressService.getWardCustomerByDistrictCustomer(id)
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

const showWardbyDistrict = async (req, res) => {
    try {
        let id = req.params.DistrictId

        let data = await AddressService.getWardByDistrict(id)
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
    showDistrictCustomerbyProvinceCustomer, showWardCustomerbyDistricCustomer, showAllProvinceCutomer,
    showAllAddress_to, showAllAddress_from, showAllProvince, showDistrictbyProvince, showWardbyDistrict
}