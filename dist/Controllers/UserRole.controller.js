"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleControllers = void 0;
const UserRole_services_1 = require("../Services/UserRole.services");
const creatRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userWithRole = req.body;
        const result = yield UserRole_services_1.userRoleServices.createRoleIntoDB(userWithRole);
        res.status(200).json({
            success: true,
            message: "UserRole created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleQuery = req.query.role;
        let filteredResult;
        if (roleQuery) {
            filteredResult = yield UserRole_services_1.userRoleServices.GetAllRoleIntoDB({ role: roleQuery });
        }
        else {
            filteredResult = yield UserRole_services_1.userRoleServices.GetAllRoleIntoDB({});
        }
        res.status(200).json({
            success: true,
            message: "All Users With their role retrive successfully",
            data: filteredResult,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield UserRole_services_1.userRoleServices.GetSingleRoleIntoDB(id);
        res.status(200).json({
            success: true,
            message: "single user with Role retrive successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteARole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield UserRole_services_1.userRoleServices.deleteARoleIntoDB(id);
        res.status(200).json({
            success: true,
            message: "Users Role Deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateARole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield UserRole_services_1.userRoleServices.updateARoleIntoDB(id, data);
        res.status(200).json({
            success: true,
            message: "product Updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserRoleControllers = {
    creatRole,
    getAllRole,
    getSingleRole,
    updateARole,
    deleteARole
};
