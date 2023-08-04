import express from "express";

import apiController from "../controller/apiController"
import { checkUserJwt, checkUserPermission } from "../middleware/JwtOption"
import rateLimit from 'express-rate-limit'

const router = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many requests made from this ip , please try again  after 1 min",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers


})



const AuthApi = (app) => {
    router.all('*', checkUserJwt, checkUserPermission);

    router.get("/test-api", apiController.TestApi);
    router.post("/register", apiController.HandleRegister);
    router.post("/login", limiter, apiController.HandleLogin);
    router.get("/account", apiController.HandleGetUserAccount);
    router.post("/logout", apiController.HandleLogout);
    router.get("/Refesh_token", apiController.GetNewToken);




    return app.use("/api/v1", router);
};

export default AuthApi;