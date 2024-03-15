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
exports.studentControllers = void 0;
const Student_services_1 = require("../Services/Student.services");
const creatStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const result = yield Student_services_1.studenServices.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Student_services_1.studenServices.getAllStudentIntoDB();
        res.status(200).json({
            success: true,
            message: "All Student retrive successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Student_services_1.studenServices.getSingleStudentintoDB(id);
        res.status(200).json({
            success: true,
            message: "Single Student retrive successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteAstudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Student_services_1.studenServices.deleteStudentintoDB(id);
        res.status(200).json({
            success: true,
            message: "A Student Deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateAstudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield Student_services_1.studenServices.updateStudentintoDB(id, data);
        res.status(200).json({
            success: true,
            message: "A Student Updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.studentControllers = {
    creatStudent,
    getAllStudent,
    getSingleStudent,
    deleteAstudent,
    updateAstudent
};
