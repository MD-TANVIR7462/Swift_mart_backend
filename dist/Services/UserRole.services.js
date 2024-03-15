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
exports.userRoleServices = void 0;
const UserRole_Model_1 = require("../Models/UserRole.Model");
const createRoleIntoDB = (userRole) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield UserRole_Model_1.UserRoleModel.create(userRole);
    return result;
});
const GetAllRoleIntoDB = (role) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield UserRole_Model_1.UserRoleModel.find(role);
    return result;
});
const GetSingleRoleIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield UserRole_Model_1.UserRoleModel.findById(id);
    return result;
});
const deleteARoleIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield UserRole_Model_1.UserRoleModel.deleteOne({ _id: id });
    return result;
});
const updateARoleIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield UserRole_Model_1.UserRoleModel.findByIdAndUpdate(id, { $set: data }, { new: true });
    return result;
});
exports.userRoleServices = {
    createRoleIntoDB,
    GetAllRoleIntoDB,
    GetSingleRoleIntoDB,
    deleteARoleIntoDB,
    updateARoleIntoDB,
};
