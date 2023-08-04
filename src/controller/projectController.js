import ProjectService from "../service/ProjectService"


const showAllProject = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.createBy) {
            let page = req.query.page;
            let limit = req.query.limit;
            let createBy = req.query.createBy;

            let data = await ProjectService.getAllProjectWithPagination(+page, +limit, createBy)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await ProjectService.getAllProject()
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
const showProject = async (req, res) => {
    try {
        console.log("a-39", req.params.id)
        let data = await ProjectService.getProjects(req.params.id)
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
const addProjectToUser = async (req, res) => {
    try {
        let data = await ProjectService.createProjects(req.body)
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
const showAllSaleChannel = async (req, res) => {
    try {
        let data = await ProjectService.getSalesChannel()
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
const showStatusPayment = async (req, res) => {
    try {

        let data = await ProjectService.getAllStatusPayment()
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
const updateProject = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithId(req.body)
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
const DeleteProject = async (req, res) => {
    try {
        let data = await ProjectService.RemoveProject(req.body.id)
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
const createChatProject = async (req, res) => {
    try {
        let data = await ProjectService.createChat(req.body)
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
const updateChatProject = async (req, res) => {
    try {
        let data = await ProjectService.updateChat(req.body)
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
const DeleteChatProject = async (req, res) => {
    try {
        let data = await ProjectService.RemoveChatProject(req.body.id)
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
const showDataBySearch = async (req, res) => {
    try {

        let data = await ProjectService.getDataSearch(req.query.text, req.query.phone)


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
const showDataByTime = async (req, res) => {
    try {
        let startDate = req.query.StartDateCalendar
        let endDate = req.query.endDateCalendar
        let phone = req.query.phone

        let data = await ProjectService.getDataSearchWithtime(startDate, endDate, phone)
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
const showAllProjectWithStatusPayment = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.createBy, req.query.statuspaymentId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let createBy = req.query.createBy;
            let statuspaymentId = req.query.statuspaymentId;


            let data = await ProjectService.getAllProjectWithPaginationAndStatusPayment(+page, +limit, createBy, statuspaymentId)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllProjectWithStatusDeliveryNull = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.createBy, req.query.statusdeliveryId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let createBy = req.query.createBy;
            let statusdeliveryId = req.query.statusdeliveryId;


            let data = await ProjectService.getAllProjectWithPaginationAndStatusDeliveryNull(+page, +limit, createBy, statusdeliveryId)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllnameProduct = async (req, res) => {
    try {
        let data = await ProjectService.getAllProductName()
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
const showAllnumberProductBynameProduct = async (req, res) => {
    try {
        if (req.query.nameProduct && req.query.id) {
            let id = req.query.id;

            let data = await ProjectService.getAllnumberProduct(id)


            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await ProjectService.getAllProject()
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
const handleAssigUserandProjectId = async (req, res) => {
    try {
        let ProjectId = req.body.projectId
        let UserId = req.body.userId
        let abc = await ProjectService.createdUserIdAndProjectId(+ProjectId, +UserId);

        return res.status(200).json({
            EM: abc.EM,
            EC: abc.EC,
            DT: abc.DT

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
const showAllListWarehouse = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.createdBy) {
            let page = req.query.page;
            let limit = req.query.limit;
            let createdBy = req.query.createdBy
            let data = await ProjectService.getAllwarehhouseWithPagination(+page, +limit, createdBy)
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
const createWarehouse = async (req, res) => {
    try {
        let data = await ProjectService.createWarehouseProduct(req.body)
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
const updatewarehouse = async (req, res) => {
    try {
        let data = await ProjectService.updateProductInWarehouse(req.body)
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
const updateNumberInWarehouse = async (req, res) => {
    try {
        let id = req.body.id
        let number = req.body.number
        let data = await ProjectService.updateNumberProductInWarehouse(+id, +number)


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
const showNumberInWarehouse = async (req, res) => {
    try {
        if (req.query.id) {
            let id = req.query.id;
            let data = await ProjectService.getNumberInWarehouse(id)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showDataWarehouseBySearch = async (req, res) => {
    try {

        let data = await ProjectService.getDataSearchWarehouse(req.query.data)
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
const showDataWarehouseByAllStatusProduct = async (req, res) => {
    try {
        let createdBy = req.query.created_By;

        if (req.query.created_By) {
            let data = await ProjectService.getataWarehouseWithPaginationAndAllStatusProduct(createdBy)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showProductByStatusInWarehouse = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.created_By, req.query.productStatusId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let createdBy = req.query.created_By;
            let statusProductId = req.query.productStatusId;


            let data = await ProjectService.getProductByStatusInWarehouse(+page, +limit, createdBy, statusProductId)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT
            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllWarehouseDashboard = async (req, res) => {
    try {
        let createdBy = req.query.created_By;
        if (req.query.created_By) {
            let data = await ProjectService.getAllAllWarehouseDashboard(createdBy)
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
const showAllWarehouseDashboardWithTime = async (req, res) => {
    try {
        let createdBy = req.query.created_By;
        let startDate = req.query.StartDateCalendar
        let endDate = req.query.endDateCalendar
        if (req.query.created_By && req.query.StartDateCalendar && req.query.endDateCalendar) {
            let data = await ProjectService.getAllWarehouseDashboardWithTime(createdBy, startDate, endDate)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllWarehouseDashboardWithMoney = async (req, res) => {
    try {
        let createdBy = req.query.created_By;

        if (req.query.created_By) {
            let data = await ProjectService.getAllWarehouseDashboardWithMoney(createdBy)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllDataProductDashboard = async (req, res) => {
    try {
        let createdBy = req.query.createdBy;
        if (req.query.createdBy) {
            let data = await ProjectService.getAllDataProductDashboard(createdBy)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllDataProductDashboardByAge = async (req, res) => {
    try {
        let createdBy = req.query.createdBy;
        if (req.query.createdBy) {
            let data = await ProjectService.getAllDataProductDashboardByAge(createdBy)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllProductDashboardWithTime = async (req, res) => {
    try {
        let createdBy = req.query.created_By;
        let startDate = req.query.StartDateCalendar
        let endDate = req.query.endDateCalendar
        if (req.query.created_By && req.query.StartDateCalendar && req.query.endDateCalendar) {
            let data = await ProjectService.getAllProductDashboardWithTime(createdBy, startDate, endDate)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllProductDashboardWithMounth = async (req, res) => {
    try {
        let createdBy = req.query.created_By;

        if (req.query.created_By) {
            let data = await ProjectService.getAllProductDashboardWithMounth(createdBy)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllProductDashboardWithCutomer = async (req, res) => {
    try {
        let createdBy = req.query.created_By;

        if (req.query.created_By) {
            let data = await ProjectService.getAllProductDashboardWithCutomer(createdBy)

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            return res.status(200).json({
                EM: "Not found",
                EC: "-1",
                DT: []

            })
        }
    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }

}
const showAllProjectWithEmployer = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployer(+page, +limit, +unit)
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
const showAllProjectWithEmployerWithFlag = async (req, res) => {
    try {
        if (req.query.unitId) {

            let unit = req.query.unitId;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerWithFlag(+unit)
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
const updateProjectWithEmployer = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithEmployerWithId(req.body)
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
const showAllProjectWithEmployerPickUp = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId && req.query.number) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;
            let number = req.query.number;

            let data = await ProjectService.getAllProjectWithPaginationWithEmployerPickup(+page, +limit, unit, +number)
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
const showAllProjectWithEmployerPickUpWithnameUser = async (req, res) => {
    try {
        if (req.query.unitId && req.query.username && req.query.phone) {

            let unit = req.query.unitId;
            let Username = req.query.username;
            let Phone = req.query.phone;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerWithUsername(+unit, Username, Phone)
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
const updateProjectWithEmployerPickup = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithEmployerPickup(req.body)
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
const showAllProjectWithEmployerWarehouse = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerWarehouse(+page, +limit, unit)
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
const showAllProjectWithEmployerWarehouseWithnameUser = async (req, res) => {
    try {
        if (req.query.unitId && req.query.username && req.query.phone) {

            let unit = req.query.unitId;
            let Username = req.query.username;
            let Phone = req.query.phone;



            let data = await ProjectService.getAllProjectWithPaginationWithEmployerWarehouseWithUsername(+unit, Username, Phone)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await ProjectService.getAllProject()
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
const updateProjectWithEmployerWarehouse = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithEmployerWarehouse(req.body)
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
const showAllProjectWithEmployerDelivery = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerDelivery(+page, +limit, +unit)
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
const showAllProjectWithEmployerDeliveryWithnameUser = async (req, res) => {
    try {
        if (req.query.unitId && req.query.username && req.query.phone) {

            let unit = req.query.unitId;
            let Username = req.query.username;
            let Phone = req.query.phone;



            let data = await ProjectService.getAllProjectWithPaginationWithEmployerDeliveryWithUsername(+unit, Username, Phone)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        } else {
            let data = await ProjectService.getAllProject()
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
const updateProjectWithEmployerDelivery = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithEmployerDelivery(req.body)
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
const showAllProjectWithEmployerWithAllStausPickUp = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId && req.query.statuspickupId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;
            let statuspickup = req.query.statuspickupId;

            let data = await ProjectService.getAllProjectWithEmployerWithAllStausPickUp(+page, +limit, unit, statuspickup)
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
const showAllProjectWithEmployerWithAllStausWarehouse = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId && req.query.statuswarehouseId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;
            let statuswarehouse = req.query.statuswarehouseId;

            let data = await ProjectService.getAllProjectWithEmployerWithAllStausWarehouse(+page, +limit, unit, statuswarehouse)
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
const showAllProjectWithEmployerWithAllStausDelivery = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId && req.query.statusDeliveryId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;
            let statusDelivery = req.query.statusDeliveryId;

            let data = await ProjectService.getAllProjectWithEmployerWithAllStausDelivery(+page, +limit, unit, statusDelivery)
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
const showAllProjectWithEmployerWithAllNumber = async (req, res) => {
    try {
        if (req.query.unitId) {
            let unit = req.query.unitId;
            let data = await ProjectService.getNumberEmployer(unit)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }

    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}
const showDataproductBySearchWithEmployer = async (req, res) => {
    try {
        let positon = req.query.positon
        let unit = req.query.unitId
        console.log("req.query.data, positon, +unit", req.query.data, positon, +unit)
        let data = await ProjectService.showDataproductBySearchWithEmployer(req.query.data, positon, +unit)
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
const showDataproductWithStatus = async (req, res) => {
    try {
        if (req.query.unitId && req.query.statuspickup || req.query.statuswarehouse || req.query.statusDelivery || req.query.receiveMoney) {
            let unit = req.query.unitId;
            let statuspickupId = req.query.statuspickup;
            let statuswarehouseId = req.query.statuswarehouse;
            let statusDeliveryId = req.query.statusDelivery;
            let receiveMoneyId = req.query.receiveMoney;

            let data = await ProjectService.getDataproductWithStatus(unit, statuspickupId, statuswarehouseId, statusDeliveryId, receiveMoneyId)
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
const showAllProjectWithEmployerOverview = async (req, res) => {
    try {
        if (req.query.page && req.query.limit && req.query.unitId) {
            let page = req.query.page;
            let limit = req.query.limit;
            let unit = req.query.unitId;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerOverview(+page, +limit, +unit)
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
const showAllProjectWithEmployerOverviewWithnameUser = async (req, res) => {
    try {
        if (req.query.unitId && req.query.username && req.query.phone) {

            let unit = req.query.unitId;
            let Username = req.query.username;
            let Phone = req.query.phone;


            let data = await ProjectService.getAllProjectWithPaginationWithEmployerOverviewWithUsername(+unit, Username, Phone)
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
const updateProjectWithEmployerOverview = async (req, res) => {
    try {

        let data = await ProjectService.updateProjectWithEmployerOverview(req.body)
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
const addInfomationToNotification = async (req, res) => {
    try {
        let data = await ProjectService.createNotification(req.body)
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
const showAllNotification = async (req, res) => {
    try {
        if (req.query.unitId && req.query.user) {

            let unit = req.query.unitId;
            let user = req.query.user;

            let data = await ProjectService.getshowAllNotification(+unit, user)
            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT

            })
        }


    } catch (error) {
        return res.status(500).json({
            EM: "Error from Server",
            EC: "-1",
            DT: "",
        })
    }
}
const changeStatusNotification = async (req, res) => {
    try {


        let data = await ProjectService.updateStatusNotification(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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
const changePassWord = async (req, res) => {
    try {


        let data = await ProjectService.UpdatePassWord(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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
const SendEmailForgetPass = async (req, res) => {
    try {


        let data = await ProjectService.ResetPassWord(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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
const ResetPassWord = async (req, res) => {
    try {


        let data = await ProjectService.updateNewPass(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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
const CheckNotificationLive = async (req, res) => {
    try {


        let data = await ProjectService.Check(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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

const updateImageChat = async (req, res) => {
    try {


        let data = await ProjectService.UpdateNewImageChat(req.body)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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

const getChat = async (req, res) => {
    try {

        let id = req.query.id
        let data = await ProjectService.GetChatProject(id)
        return res.status(200).json({
            EM: data?.EM,
            EC: data?.EC,
            DT: data?.DT

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

module.exports = {
    showAllProject, showProject, addProjectToUser, showAllSaleChannel, showStatusPayment, updateProject, DeleteProject,
    createChatProject, updateChatProject, DeleteChatProject, showDataBySearch, showDataByTime, showAllProjectWithStatusPayment,
    showAllProjectWithStatusDeliveryNull, showAllnameProduct, showAllnumberProductBynameProduct, handleAssigUserandProjectId,
    showAllListWarehouse, updatewarehouse, updateNumberInWarehouse, showNumberInWarehouse, showDataWarehouseBySearch,
    showDataWarehouseByAllStatusProduct, showProductByStatusInWarehouse, showAllWarehouseDashboard, showAllWarehouseDashboardWithTime,
    showAllWarehouseDashboardWithMoney, showAllDataProductDashboard, showAllDataProductDashboardByAge, showAllProductDashboardWithTime,
    showAllProductDashboardWithMounth, showAllProductDashboardWithCutomer, showAllProjectWithEmployer, showAllProjectWithEmployerWithFlag,
    updateProjectWithEmployer, showAllProjectWithEmployerPickUp, showAllProjectWithEmployerPickUpWithnameUser, updateProjectWithEmployerPickup,
    showAllProjectWithEmployerWarehouse, showAllProjectWithEmployerWarehouseWithnameUser, updateProjectWithEmployerWarehouse,
    showAllProjectWithEmployerDelivery, showAllProjectWithEmployerDeliveryWithnameUser, updateProjectWithEmployerDelivery,
    showAllProjectWithEmployerWithAllStausPickUp, showAllProjectWithEmployerWithAllStausWarehouse, showAllProjectWithEmployerWithAllStausDelivery
    , showAllProjectWithEmployerWithAllNumber, showDataproductBySearchWithEmployer, showDataproductWithStatus, showAllProjectWithEmployerOverview,
    createWarehouse, showAllProjectWithEmployerOverviewWithnameUser, updateProjectWithEmployerOverview, addInfomationToNotification, showAllNotification,
    changeStatusNotification, changePassWord, SendEmailForgetPass, ResetPassWord, CheckNotificationLive, updateImageChat, getChat
}