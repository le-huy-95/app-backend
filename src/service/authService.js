import bcrypt from "bcryptjs"

import db from "../models/index"
import { Op } from "sequelize";
import { getGroupWithRole, shippingUnit } from "../service/jwtService"
import { CreateJwt, CreateRefeshTokenJwt } from "../middleware/JwtOption"
require("dotenv").config();

var salt = bcrypt.genSaltSync(10);


const hashPassWord = (passwordInput) => {
    return bcrypt.hashSync(passwordInput, salt);
}


const checkEmail = async (userEmail) => {
    let ixExitEmail = await db.Users.findOne({
        where: { email: userEmail }
    })
    if (ixExitEmail) {
        return true
    }
    return false
}
const checkPhone = async (userPhone) => {
    let ixExitPhone = await db.Users.findOne({
        where: { phone: userPhone }
    })
    if (ixExitPhone) {
        return true
    }
    return false
}


const regiterNewUser = async (userData) => {
    console.log("userData", userData)
    try {
        let checkEmailExist = await checkEmail(userData.email)
        if (checkEmailExist === true) {
            return {
                EM: "email already exists ",
                EC: "1",
            }
        }
        let checkPhoneExist = await checkPhone(userData.Phone)
        if (checkPhoneExist === true) {
            return {
                EM: "Phone already exists ",
                EC: "1",
            }
        }
        let hashPass = hashPassWord(userData.password);

        await db.Users.create({
            email: userData.email,
            password: hashPass,
            usersname: userData.username,
            phone: userData.Phone,
            group_id: 3,
            provincecustomer_id: userData.Province,
            districtcustomer_id: userData.District,
            wardcustomer_id: userData.Ward,
            addressDetail: userData.DetailAddress,
            sex: userData.Sex


        })
        return {
            EM: "Created new user succesfully ^-^ ",
            EC: 0
        }
    } catch (error) {
        console.log("error", error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }




}



const checkPassWord = (inputPassWord, hashPassWord) => {
    return bcrypt.compareSync(inputPassWord, hashPassWord)
}


const LoginUser = async (data) => {
    try {
        let user = await db.Users.findOne({
            where: {
                [Op.or]: [
                    { email: data.valueLogin },
                    { phone: data.valueLogin }

                ]
            },
            raw: true,
            nest: true,
            include: [
                {
                    model: db.Groups,
                },
            ]

        })
        if (user) {
            let isCorrectPassword = checkPassWord(data.password, user.password)
            if (isCorrectPassword == true) {
                let groupWithRole = await getGroupWithRole(user);
                let nameUnit = await shippingUnit(+user.shippingunit_id);

                let payload = {
                    email: user.email,
                    phone: user.phone,
                    usersname: user.usersname,
                    phone: user.phone,
                    Position: user.Position,
                    shippingunit_id: user.shippingunit_id,
                    groupWithRole,
                    nameUnit,
                    group: user.Group.name

                }


                const generrateTokens = (payload) => {
                    const token = CreateJwt(payload)
                    const refesh_token = CreateRefeshTokenJwt(payload)
                    return { token, refesh_token }
                }



                return {
                    EM: "ok ! ",
                    EC: "0",
                    DT: {
                        access_token: generrateTokens(payload),
                        groupWithRole,
                        email: user.email,
                        phone: user.phone,
                        Position: user.Position,
                        usersname: user.usersname,
                        shippingunit_id: user.shippingunit_id,
                        nameUnit,
                        group: user.Group.name
                    }

                }
            }
        }
        return {
            EM: "Your email/phone number or password is incorrect ",
            EC: "1",
            DT: ""

        }
    } catch (error) {
        console.log(error)
        return {
            EM: "please check again in service ",
            EC: -2
        }
    }
}
module.exports = {
    regiterNewUser, checkPassWord, LoginUser
}