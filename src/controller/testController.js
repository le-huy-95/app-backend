import testServices from "../service/testService"

const handleTest = (req, res) => {
    const name = "huy"
    return res.render("test.ejs", { name })
}

const handleCreateNewUser = async (req, res) => {
    let { email, password, Username } = req.body

    testServices.createNewUser(email, password, Username)




    return res.redirect("/users")
}
const handleRenderListUser = async (req, res) => {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)


    let listUser = await testServices.getAllUser()


    return res.render("test.ejs", { listUser })

}
const DeleteUser = async (req, res) => {
    console.log("check id", req.params.id)
    await testServices.deletemem(req.params.id)

    return res.redirect("/users")

}

const UpdateUser = async (req, res) => {
    let id = req.params.id
    let user = await testServices.getUserByID(id)
    let userdata = user
    // if (user && user.length > 0) {
    //     userdata = user[0]
    // }
    return res.render("test-update-user.ejs", { userdata })

}
const handleUpdateUser = async (req, res) => {
    let { email, username } = req.body
    let id = req.body.id

    await testServices.UpdateUserInfo(email, username, id)
    return res.redirect("/users")


}



module.exports = {
    handleTest, handleCreateNewUser, handleRenderListUser, DeleteUser, UpdateUser, handleUpdateUser
}