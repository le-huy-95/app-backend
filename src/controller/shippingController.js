import ShippingService from "../service/ShippingService"


const showAllshippingUnit = async (req, res) => {
    try {

        let data = await ShippingService.getAllUnit()
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

const showDistrictbyProvince = async (req, res) => {
    try {
        let id = req.params.shippingunit_id

        let data = await ShippingService.getFromAddressByShipping_Unit(id)
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

const showPrice = async (req, res) => {
    try {

        let From = req.query.From
        let To = req.query.To
        let shippingunit_id = +req.query.shippingUnit_Id
        let data = await ShippingService.getPriceByAddress(+shippingunit_id, From, To)
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
    showAllshippingUnit, showDistrictbyProvince, showPrice
}