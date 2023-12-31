
require("dotenv").config();

// 2 buoc sua loi cors
const configCors = (app) => {
    // Add headers before the routes are defined
    app.use(function (req, res, next) {
        // console.log(req.method, req.headers.origin)
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        // buoc 1: them Authorization
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type ,Authorization');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);


        // buoc 2
        if (req.method === "OPTIONS") {
            return res.sendStatus(200)
        }


        // Pass to next layer of middleware
        next();
    });
}

export default configCors
