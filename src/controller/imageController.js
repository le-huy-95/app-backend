
import multer from "multer"

import db from "../models/index"

import ImageService from "../service/ImageService"
import ProjectService from "../service/ProjectService"






let handleCreateFile = async (req, res) => {
    try {


        let image = req.file.filename;
        let Product = req.body.Product;
        let Product_Prince = req.body.Product_Prince;
        let Number = req.body.Number;
        let Suppliers = req.body.Suppliers;
        let unit = req.body.unit;
        let unitMoney = req.body.unitMoney;

        let Suppliers_address = req.body.Suppliers_address;
        let Suppliers_phone = req.body.Suppliers_phone;
        let product_statusId = +req.body.product_statusId;
        let createdBy = req.body.createdBy;


        let data = await ProjectService.CreateImageInWarehouse(image, Product, Product_Prince, Number, Suppliers, unit, unitMoney, Suppliers_address, +product_statusId, createdBy, Suppliers_phone);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}

let handleUploadFile = async (req, res) => {
    try {

        if (req.file) {
            let image = req.file.filename;
            let Product = req.body.Product;
            let Product_Prince = req.body.Product_Prince;
            let Number = req.body.Number;
            let Suppliers = req.body.Suppliers;
            let unit = req.body.unit;
            let unitMoney = req.body.unitMoney;
            let Suppliers_address = req.body.Suppliers_address;
            let Suppliers_phone = req.body.Suppliers_phone;
            let product_statusId = req.body.product_statusId;
            let createdBy = req.body.createdBy;
            let id = req.body.id;



            let data = await ProjectService.UpdateImageInWarehouse(id, image, Product, Product_Prince, Number, Suppliers, unit, unitMoney, Suppliers_address, product_statusId, createdBy, Suppliers_phone);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })

        }
        if (!req.file) {
            let image = req.body.image;
            let Product = req.body.Product;
            let Product_Prince = req.body.Product_Prince;
            let Number = req.body.Number;
            let Suppliers = req.body.Suppliers;
            let unit = req.body.unit;
            let unitMoney = req.body.unitMoney;
            let Suppliers_address = req.body.Suppliers_address;
            let Suppliers_phone = req.body.Suppliers_phone;
            let product_statusId = req.body.product_statusId;
            let createdBy = req.body.createdBy;
            let id = req.body.id;



            let data = await ProjectService.UpdateImageInWarehouse(id, image, Product, Product_Prince, Number, Suppliers, unit, unitMoney, Suppliers_address, product_statusId, createdBy, Suppliers_phone);
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })

        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}


let handleUploadMultipleFiles = async (req, res) => {
    if (req.files) {
        console.log("req.body", req.body)
        let nerArrayImage = []
        req.files.forEach((item) => {
            nerArrayImage.push({ order: req.body.order, url: item.filename, project_id: req.body.id })
        });

        await db.Images.bulkCreate(nerArrayImage, { returning: true })
        return res.status(200).json({
            EM: `Create success ${nerArrayImage?.length} image `,
            EC: "1",
            DT: nerArrayImage,
        })

    }


    if (req.fileValidationError) {
        return res.status(500).json({
            EM: "req.fileValidationError",
            EC: "-1",
            DT: []

        })
    }
    else if (!req.files) {
        return res.status(500).json({
            EM: "Please select an image to upload",
            EC: "-1",
            DT: []

        })
    }





}

const handleGetImageByOrder = async (req, res) => {


    try {
        let order = req.query.order;
        let data = await ImageService.getImageByOrder(order);
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}


const handleAssignImageAndProjectId = async (req, res) => {
    try {
        let projectId = req.body.projectId
        let ImageId = req.body.ImageId
        let abc = await ImageService.createdImageIdAndProjectId(projectId, ImageId);

        return res.status(200).json({
            EM: abc.EM,
            EC: abc.EC,
            DT: abc.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}

const handleUpdate = async (req, res) => {
    try {

        let order = req.body.order
        let image = req.body.imageUpdate
        let abc = await ImageService.updateImage(order, image);
        return res.status(200).json({
            EM: abc.EM,
            EC: abc.EC,
            DT: abc.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}


const handleUpdateImageAndProjectId = async (req, res) => {
    try {
        let projectId = req.body.projectId
        let image = req.body.image
        let abc = await ImageService.updateImageIdAndProjectId(projectId, image);

        return res.status(200).json({
            EM: abc.EM,
            EC: abc.EC,
            DT: abc.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}



const handleGetImageByuser = async (req, res) => {


    try {
        let email = req.query.email;
        let data = await ImageService.getImageByUser(email);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT

        })
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}


module.exports = {
    handleUploadFile, handleUploadMultipleFiles, handleGetImageByOrder, handleAssignImageAndProjectId, handleUpdate, handleUpdateImageAndProjectId, handleGetImageByuser, handleCreateFile
}