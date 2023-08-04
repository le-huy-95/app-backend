// get the client
import bcrypt from "bcryptjs"
import mysql from "mysql2/promise"
const bluebird = require('bluebird');
import db from "../models";

var salt = bcrypt.genSaltSync(10);


const hashPassWord = (passwordInput) => {
    return bcrypt.hashSync(passwordInput, salt);
}

const createNewUser = async (email, password, username) => {
    let hashPass = hashPassWord(password)


    try {
        await db.User.create({
            username: username,
            email: email,
            password: hashPass
        })
    } catch (e) {
        console.log(e)
    }

    // connection.query(
    //     'INSERT INTO user(email, password, Username) VALUES(?, ?, ?) ', [email, hashPass, Username],
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err)
    //         }

    //     }
    // );
}


const getAllUser = async () => {
    // let users = []
    // users = await db.User.findOne({
    //     where: { id: 1 },
    //     raw: true
    // })
    // console.log("new user ", users)



    let users = await db.User.findAll({
        where: { id: 1 },
        attributes: ["id", "username", "email"],
        include: {
            model: db.Group, attributes: ["name", "description"],
        },
        nest: true,
        raw: true
    })

    // let R = await db.Role.findAll({
    //     include: {
    //         model: db.Group, where: { id: 1 }
    //     },
    //     nest: true,
    //     raw: true

    // })
    // console.log("new users ", users)

    // console.log("new Roles ", R)

    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    // try {
    //     const [rows, fields] = await connection.execute('select * from user ');
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }

    return users;

}

const deletemem = async (id) => {

    await db.User.destroy({
        where: { id }
    })
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    // try {
    //     const [rows, fields] = await connection.execute('DELETE FROM user WHERE id= ? ', [id]);
    //     return rows

    // } catch (e) {
    //     console.log(e)
    // }
}

const getUserByID = async (id) => {
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    // try {
    //     const [rows, fields] = await connection.execute('select * from user WHERE id= ? ', [id]);
    //     return rows

    // } catch (e) {
    //     console.log(e)
    // }
    let user = {}
    user = await db.User.findOne({
        where: { id: id }
    })
    // khi nao muon convert tu sequelize object sang 1 bien javascript thuan thi dung cau lenh user.get({ plain: true }) HOAC RAW:TRUE
    return user.get({ plain: true })

}
const UpdateUserInfo = async (email, username, id) => {
    await db.User.update(
        {
            email: email,
            username: username,
        },
        {
            where: {
                id: id

            }
        });
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'app web', Promise: bluebird });


    // try {

    //     const [rows, fields] = await connection.execute('update user set email=?,Username=? WHERE id= ? ', [email, Username, id]);
    //     return rows

    // } catch (e) {
    //     console.log(e)
    // }
}
module.exports = {
    hashPassWord, createNewUser, getAllUser, deletemem, getUserByID, UpdateUserInfo
}