import express from "express";

import projectController from "../controller/projectController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"

const router = express.Router();




const ProjectApi = (app) => {

    router.all('*', checkUserJwt, checkUserPermission);
    router.get("/getProject", projectController.showAllProject);
    router.get("/getProjects/:id", projectController.showProject);
    router.post("/add-project-to-user", projectController.addProjectToUser);
    router.get("/getSaleChannel", projectController.showAllSaleChannel);
    router.put("/project/update", projectController.updateProject);
    router.get("/getStastusPayment", projectController.showStatusPayment);
    router.delete("/delete/Project", projectController.DeleteProject);
    router.post("/add-chat-to-Project", projectController.createChatProject);
    router.put("/project/update/chat", projectController.updateChatProject);
    router.delete("/Project/delete/chat", projectController.DeleteChatProject);
    router.get("/Project/search", projectController.showDataBySearch);
    router.get("/Project/search/ByTime", projectController.showDataByTime);
    router.get("/getProject/status/payment", projectController.showAllProjectWithStatusPayment);
    router.get("/getProject/status/Delivery", projectController.showAllProjectWithStatusDeliveryNull);
    router.get("/get/nameProduct", projectController.showAllnameProduct);
    router.get("/get/Product-number/by-name-product", projectController.showAllnumberProductBynameProduct);
    router.post("/assign-to-Project-user", projectController.handleAssigUserandProjectId)
    router.get("/getproduct/warehouse", projectController.showAllListWarehouse);
    router.post("/create/warehouse", projectController.createWarehouse);
    router.put("/update/warehouse", projectController.updatewarehouse);
    router.put("/update/Number/warehouse", projectController.updateNumberInWarehouse);
    router.get("/getNumber/warehouse", projectController.showNumberInWarehouse);
    router.get("/Project/search/warehouse", projectController.showDataWarehouseBySearch);
    router.get("/Project/all/status-product", projectController.showDataWarehouseByAllStatusProduct);
    router.get("/getProduct/bystatus_product/warehouse", projectController.showProductByStatusInWarehouse);
    router.get("/getWarehouseDashboard", projectController.showAllWarehouseDashboard);
    router.get("/getWarehouseDashboardWithTime", projectController.showAllWarehouseDashboardWithTime);
    router.get("/getWarehouseDashboardWithMoney", projectController.showAllWarehouseDashboardWithMoney);
    router.get("/getDataForProductDashboard", projectController.showAllDataProductDashboard);
    router.get("/getDataForProductDashboardByAge", projectController.showAllDataProductDashboardByAge);
    router.get("/getProductDashboarWithTime", projectController.showAllProductDashboardWithTime);
    router.get("/getProductDashboarWithMounth", projectController.showAllProductDashboardWithMounth);
    router.get("/getProductDashboarWithCustomer", projectController.showAllProductDashboardWithCutomer);
    router.get("/getProjectWithEmployer", projectController.showAllProjectWithEmployer);
    router.get("/getProjectWithEmployerWithFlag", projectController.showAllProjectWithEmployerWithFlag);
    router.put("/project/Employer/update/status-flag", projectController.updateProjectWithEmployer);
    router.get("/getProjectWithEmployerPickUp", projectController.showAllProjectWithEmployerPickUp);
    router.get("/getProjectWithEmployerPickUp/nameUser", projectController.showAllProjectWithEmployerPickUpWithnameUser);
    router.put("/project/Employer/update/name_pickup", projectController.updateProjectWithEmployerPickup);
    router.get("/getProjectWithEmployerWarehouse", projectController.showAllProjectWithEmployerWarehouse);
    router.get("/getProjectWithEmployerWarehouse/nameUser", projectController.showAllProjectWithEmployerWarehouseWithnameUser);
    router.put("/project/Employer/update/name_Warehouse", projectController.updateProjectWithEmployerWarehouse);
    router.get("/getProjectWithEmployerDelivery", projectController.showAllProjectWithEmployerDelivery);
    router.get("/getProjectWithEmployerDelivery/nameUser", projectController.showAllProjectWithEmployerDeliveryWithnameUser);
    router.put("/project/Employer/update/name_Delivery", projectController.updateProjectWithEmployerDelivery);
    router.get("/getProjectWithEmployer/All/Status_pickup", projectController.showAllProjectWithEmployerWithAllStausPickUp);
    router.get("/getProjectWithEmployer/All/Status_warehouse", projectController.showAllProjectWithEmployerWithAllStausWarehouse);
    router.get("/getProjectWithEmployer/All/Status_Delivery", projectController.showAllProjectWithEmployerWithAllStausDelivery);
    router.get("/getProjectWithEmployer/All/number_all", projectController.showAllProjectWithEmployerWithAllNumber);
    router.get("/Project/search/product/employer", projectController.showDataproductBySearchWithEmployer);
    router.get("/Project/allStatusInProduct", projectController.showDataproductWithStatus);
    router.get("/getProjectWithEmployerOverview", projectController.showAllProjectWithEmployerOverview);
    router.get("/getProjectWithEmployerOverview/nameUser", projectController.showAllProjectWithEmployerOverviewWithnameUser);
    router.put("/project/Employer/update/name_Overview", projectController.updateProjectWithEmployerOverview);
    router.post("/add/infomation/notification", projectController.addInfomationToNotification);
    router.get("/getNotification", projectController.showAllNotification);
    router.put("/change/status/notification", projectController.changeStatusNotification);
    router.put("/change/PassWord", projectController.changePassWord);
    router.put("/send/email/forgetPassWord", projectController.SendEmailForgetPass);
    router.put("/reset/PassWord", projectController.ResetPassWord);
    router.put("/check/Living/notification", projectController.CheckNotificationLive);
    router.put("/update/image/chat", projectController.updateImageChat);
    router.get("/get/all/chat", projectController.getChat);






    return app.use("/api/v4", router);
};

export default ProjectApi;