import express from "express";

import shippingController from "../controller/shippingController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const ShippingApi = (app) => {
    // router.all('*', checkUserJwt, checkUserPermission);

    router.get("/getShippingUnit", shippingController.showAllshippingUnit);
    router.get("/showshippingCost/by-shippingUnit/:shippingunit_id", shippingController.showDistrictbyProvince);
    router.get("/getPrice", shippingController.showPrice);



    return app.use("/api/v6", router);
};

export default ShippingApi;