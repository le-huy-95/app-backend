import { raw } from "body-parser";
import db from "../models/index"
import bcrypt from "bcryptjs"
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




const getAllUser = async () => {
    let data = {
        EM: "",
        EC: "",
        DT: "",
    }
    try {
        let users = await db.Users.findAll({

            include: [
                {
                    model: db.Groups,
                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Shippingunits,

                },

            ],
            raw: true,
            nest: true
        })
        if (users) {
            // let data = users.get({ plain: true })
            return {
                EM: " get data ok",
                EC: "0",
                DT: users,
            }

        }
        else {
            return {
                EM: " get data ok",
                EC: "0",
                DT: [],
            }
        }
    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }

    }
}
const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Users.findAndCountAll(
            {
                include: [
                    {
                        model: db.Groups,
                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Shippingunits,

                    },

                ],
                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                // sort: ""
                raw: true,
                nest: true,

            },

        )

        let totalPage = Math.ceil(count / limit)
        let data = {
            totalUser: count,
            totalPage: totalPage,
            dataUser: rows
        }



        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const createUser = async (data) => {
    try {
        let checkEmailExist = await checkEmail(data.email)
        if (checkEmailExist === true) {
            return {
                EM: "email already exists ",
                EC: "1",
                DT: "email"
            }
        }

        let checkPhoneExist = await checkPhone(data.phone)
        if (checkPhoneExist === true) {
            return {
                EM: "Phone already exists ",
                EC: "1",
                DT: "phone"

            }

        }


        let hashPass = hashPassWord(data.password);
        if (!data.group) {
            await db.Users.create({
                email: data.email,
                phone: data.phone,
                password: hashPass,
                usersname: data.usersname,
                sex: data.sex,
                group_id: 3,
                image: data.image,
                provincecustomer_id: data.provincecustomer_id,
                districtcustomer_id: data.districtcustomer_id,
                wardcustomer_id: data.wardcustomer_id,
                addressDetail: data.addressDetail,
                Position: data.Position ? data.Position : "",
                shippingunit_id: data.shippingunit_id ? data.shippingunit_id : "0"

            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: [],
            }

        }
        if (data.group) {
            await db.Users.create({
                email: data.email,
                phone: data.phone,
                password: hashPass,
                usersname: data.usersname,
                sex: data.sex,
                group_id: data.group_id,
                image: data.image,
                provincecustomer_id: data.provincecustomer_id,
                districtcustomer_id: data.districtcustomer_id,
                wardcustomer_id: data.districtcustomer_id,
                addressDetail: data.addressDetail,
                Position: data.Position ? data.Position : "",
                shippingunit_id: data.shippingunit_id ? data.shippingunit_id : "0"

            })
            return {
                EM: " Create ok",
                EC: "0",
                DT: [],
            }

        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }

}
const updateUser = async (data) => {
    try {
        if (!data.group_id) {
            return {
                EM: " Can Not Update with Empty GroudId",
                EC: "1",
                DT: "group",
            }
        }
        let user = await db.Users.findOne({
            where: { id: data.id }
        })

        if (user) {
            await db.Users.update(
                {
                    usersname: data.usersname,
                    addressDetail: data.addressDetail,
                    sex: data.sex,
                    phone: data.phone,
                    group_id: data.group_id,
                    image: data.image,
                    provincecustomer_id: data.provincecustomer_id,
                    districtcustomer_id: data.districtcustomer_id,
                    wardcustomer_id: data.wardcustomer_id,
                    Position: data.Position ? data.Position : "",
                    shippingunit_id: data.shippingunit_id ? data.shippingunit_id : "0",
                },

                {
                    where: { id: data.id }
                }
            )
            return {
                EM: " Update Success",
                EC: "0",
                DT: "",
            }


        } else {
            return {
                EM: " Update not success",
                EC: "-1",
                DT: "",
            }
        }


    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}
const deleteUser = async (id) => {
    try {
        await db.Users.destroy({
            where: { id: id },
        })
        return {
            EM: "Delete user success",
            EC: 0,
            DT: ""

        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const getDataSearchUser = async (data) => {
    try {
        let AllUser = await db.Users.findAll({
            include: [
                {
                    model: db.Groups,
                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,
                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Shippingunits,

                },

            ],
            raw: true,
            nest: true,

        })
        if (AllUser) {
            const AllUserSearch = AllUser.filter(item =>
                item.email.includes(data) ||
                item.usersname.includes(data) ||
                item.phone.includes(data) ||
                item.Provincecustomer.name.includes(data) ||
                item.Districtcustomer.name.includes(data) ||
                item.Wardcustomer.name.includes(data) ||
                item.addressDetail.includes(data)
            )
            return {
                EM: " get data search success",
                EC: "0",
                DT: AllUserSearch,

            }

        } else {
            return {
                EM: " not Found   ",
                EC: "0",
                DT: [],
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

const getUserWithPaginationbyGroupName = async (page, limit, GroupId) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.Users.findAndCountAll(

            {
                where: { group_id: GroupId },

                include: [
                    {
                        model: db.Groups,
                    },
                    {
                        model: db.Provincecustomers,

                    },
                    {
                        model: db.Districtcustomers,

                    },
                    {
                        model: db.Wardcustomers,

                    },
                    {
                        model: db.Shippingunits,

                    },

                ],
                order: [['id', 'DESC']],
                offset: offset,
                limit: limit,
                raw: true,
                nest: true
            },

        )

        let totalPage = Math.ceil(count / limit)
        let data = {
            totalUser: count,
            totalPage: totalPage,
            dataUser: rows
        }



        return {
            EM: " ok",
            EC: "0",
            DT: data,
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "1",
            DT: [],
        }
    }
}

const getUserWithphone = async (phone) => {
    try {
        let User = await db.Users.findOne({
            where: { phone: phone },
            include: [
                {
                    model: db.Groups,
                },
                {
                    model: db.Provincecustomers,

                },
                {
                    model: db.Districtcustomers,

                },
                {
                    model: db.Wardcustomers,

                },
                {
                    model: db.Shippingunits,

                },

            ],
            raw: true,
            nest: true
        })
        if (User) {
            return {
                EM: "  success",
                EC: 0,
                DT: User

            }
        } else {
            return {
                EM: "not found",
                EC: 2,
                DT: []

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
    getAllUser, createUser, updateUser, deleteUser, getUserWithPagination, getDataSearchUser, getUserWithPaginationbyGroupName, getUserWithphone
}