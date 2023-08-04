import express from "express";

import RoleController from "../controller/RoleController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const RoleApi = (app) => {
    // router.all('*', checkUserJwt, checkUserPermission);
    router.get("/ShowAllRoleWithPagination", checkUserJwt, checkUserPermission, RoleController.ShowAllRole);
    router.get("/showRole", checkUserJwt, checkUserPermission, RoleController.showRole);
    router.get("/role/by-group/:groupId", RoleController.getRoleByGroup);
    router.post("/role/assign-to-group", checkUserJwt, checkUserPermission, RoleController.assignToGroup);
    router.post("/AddRow", checkUserJwt, checkUserPermission, RoleController.AddRole);
    router.delete("/DeleteRow", checkUserJwt, checkUserPermission, RoleController.DeleteRole);
    router.put("/updateRow", checkUserJwt, checkUserPermission, RoleController.UpdateRole);






    return app.use("/api/v3", router);
};

export default RoleApi;