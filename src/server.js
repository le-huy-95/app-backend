import express from "express";
import configViewEngine from "./config/ViewEngine";
import initWebRouter from "./routes/routerWebTest";
import AuthApi from "./routes/AuthApi"
import CrudUser from "./routes/CrudUser"
require("dotenv").config();
import configCors from "./config/cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import RoleApi from "./routes/Role"
// import connection from "./config/connectdb"
import ProjectApi from "./routes/Project"
import AddressApi from "./routes/Address"
import ImageApi from "./routes/ImageApi"
import ShippingApi from "./routes/shipping"
const app = express();
configCors(app)
configViewEngine(app);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


// config cookie-parser
app.use(cookieParser())
// test connectiondb
// connection()



initWebRouter(app);
AuthApi(app)
CrudUser(app)
RoleApi(app)
ProjectApi(app)
AddressApi(app)
ImageApi(app)
ShippingApi(app)



const PORT = process.env.PORT || 3030;




app.use((req, res) => {
    return res.send("404 Not Found")
})
app.listen(PORT, () => {
    console.log("app is running on the port" + PORT);
});