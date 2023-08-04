import express from "express";

import crudUser from "../controller/crudUserController"
import groupController from "../controller/groupController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"
const router = express.Router();



const CrudUser = (app) => {


    // router.all('*', checkUserJwt, checkUserPermission);
    router.get("/user/show", crudUser.show);
    router.post("/user/create", checkUserJwt, checkUserPermission, crudUser.create);
    router.put("/user/update", crudUser.update);
    router.delete("/user/delete", checkUserJwt, checkUserPermission, crudUser.remove);
    router.get("/group/show", groupController.showGroup);
    router.get("/user/search", crudUser.showDataBySearch);
    router.get("/user/show/search/byGroup", crudUser.showUserbyGroup);
    router.get("/user/findwithphone", crudUser.finduserwithphone);
    router.get("/user/profile", crudUser.GetProfile);



    return app.use("/api/v2", router);
};

export default CrudUser;