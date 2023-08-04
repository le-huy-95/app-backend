import db from "../models/index"


const getImageByOrder = async (order) => {
    try {
        let data = await db.Images.findAll({
            where: { order: order },
        })
        if (data) {
            return {
                EM: " Find success",
                EC: "0",
                DT: data,
            }
        } else {
            return {
                EM: `Not order ${order}`,
                EC: "0",
                DT: data,
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "-1",
            DT: [],
        }
    }
}

// const createdImageIdAndProjectId = async (projectId, ImageId) => {
//     try {
//         console.log("projectId", projectId)
//         if (projectId, ImageId) {
//             let nerArray = []
//             ImageId.forEach((item) => {
//                 nerArray.push({ project_id: projectId, image_id: item.id })
//             });
//             await db.ProjectsImages.bulkCreate(nerArray, { returning: true })
//             return {
//                 EM: " Created  Success",
//                 EC: "0",
//                 DT: [],
//             }
//         }



//     } catch (error) {
//         console.log("error", error)
//         return {
//             EM: "Error from Server",
//             EC: "-1",
//             DT: "",
//         }
//     }
// }
const updateImage = async (order, image) => {
    try {
        await db.Images.destroy({
            where: { order: order }
        })
        let nerArrayImage = []
        image.forEach((item) => {
            nerArrayImage.push({ order: order, url: item.url })


        });
        let data = await db.Images.bulkCreate(nerArrayImage, { returning: true })
        return {
            EM: " Change Image Success",
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

const updateImageIdAndProjectId = async (projectId, image) => {


    try {
        if (projectId, image) {
            await db.ProjectsImages.destroy({
                where: { project_id: +projectId }
            })
            let nerArray = []
            image.forEach((item) => {
                nerArray.push({ project_id: projectId, image_id: item.id })



            });
            let data = await db.ProjectsImages.bulkCreate(nerArray, { returning: true })
            return {
                EM: " Created  Success",
                EC: "0",
                DT: data,
            }
        }



    } catch (error) {
        return {
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        }
    }
}


const getImageByUser = async (email) => {
    try {
        let data = await db.Users.findAll({
            where: { email: email },
        })
        if (data) {
            return {
                EM: " Find success",
                EC: "0",
                DT: data,
            }
        } else {
            return {
                EM: `Not email ${email}`,
                EC: "0",
                DT: "",
            }
        }

    } catch (error) {
        return {
            EM: " Wrongs with services",
            EC: "-1",
            DT: [],
        }
    }
}



module.exports = {
    getImageByOrder, updateImage, updateImageIdAndProjectId, getImageByUser
}