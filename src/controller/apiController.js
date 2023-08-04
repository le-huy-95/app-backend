
import authService from "../service/authService"
import { CreateJwt, VerifyRefeshToken } from "../middleware/JwtOption"


const TestApi = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "ok da ket noi"
    })

}
const HandleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.Phone || !req.body.password) {
            return res.status(200).json({
                EM: "Missing required parameters",
                EC: "1",
                DT: "",
            })
        }
        if (req.body.password && req.body.password.length < 6 || !req.body.password) {
            return res.status(200).json({
                EM: "Password have to enter at least 6 character",
                EC: "1",
                DT: "",
            })
        }


        let data = await authService.regiterNewUser(req.body)


        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: "",
        })

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}






const HandleLogin = async (req, res) => {
    try {
        let data = await authService.LoginUser(req.body);
        //set cookie (khi login thanh cong va co token thi moi set cookie)
        if (data && data.DT) {
            res.cookie("jwt", data.DT.access_token.token, {
                httpOnly: true,
                maxAge: 10 * 60 * 1000,
                // set time cookies ton tai

            })
            res.cookie("refesh_token", data.DT.access_token.refesh_token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
                // set time cookies ton tai
            })

        }

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}


const HandleGetUserAccount = async (req, res) => {
    return res.status(200).json({
        EM: "ok",
        EC: 0,
        DT: {
            access_token: req.token,
            groupWithRole: req.user.groupWithRole,
            email: req.user.email,
            usersname: req.user.usersname,
            phone: req.user.phone,
            image: req.user.image,
            Position: req.user.Position,
            shippingunit_id: req.user.shippingunit_id,
            nameUnit: req.user.nameUnit,
            groupName: req.user.group
        }

    })
}



const HandleLogout = (req, res) => {

    try {
        res.clearCookie("jwt")
        res.clearCookie("refesh_token")

        return res.status(200).json({
            EM: "log out ok",
            EC: 0,
            DT: "",
        })

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

const GetNewToken = async (req, res) => {

    try {
        let refesh_token = req.headers.cookie ? req.headers.cookie.slice(13) : ""
        console.log("refesh_token", refesh_token)
        if (!refesh_token) {
            return res.status(400).json({
                EM: " Can not get refesh token ok",
                EC: -1,
                DT: "",
            })
        } else {
            let data = await VerifyRefeshToken(refesh_token)
            if (data) {
                console.log("data", data)
                let payload = {
                    email: data.email,
                    phone: data.phone,
                    usersname: data.usersname,
                    phone: data.phone,
                    Position: data.Position,
                    shippingunit_id: data.shippingunit_id,
                    groupWithRole: data.groupWithRole,
                    nameUnit: data.nameUnit,
                    group: data.group
                }

                const newToken = await CreateJwt(payload)
                return res.status(200).json({
                    EM: "OK",
                    EC: "1",
                    DT: newToken,
                })

            } else {
                return res.status(400).json({
                    EM: "Error",
                    EC: "-11",
                    DT: -"",
                })
            }

        }


    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}
module.exports = {
    TestApi, HandleRegister, HandleLogin, HandleGetUserAccount,
    HandleLogout, GetNewToken
}