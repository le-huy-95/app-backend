import express from "express";


import testController from "../controller/testController";
import apiController from "../controller/apiController"
const router = express.Router();

const testMiddleWare = (req, res, next) => {
    console.log("calling a middleware")
    next();
}




const initWebRouter = (app) => {






    router.get("/users", testController.handleRenderListUser);
    router.post("/users/create-user", testController.handleCreateNewUser);
    router.post("/delete-user/:id", testController.DeleteUser);
    router.get("/update-user/:id", testController.UpdateUser);
    router.post("/users/update-user", testController.handleUpdateUser);
    router.get("/api/test-api", apiController.TestApi);




    return app.use("/", router);
};

export default initWebRouter;