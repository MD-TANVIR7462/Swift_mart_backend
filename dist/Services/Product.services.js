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
exports.producServices = void 0;
const ProductModel_1 = require("../Models/ProductModel");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductModel_1.ProductModel.create(product);
    return result;
});
const getAllProductIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductModel_1.ProductModel.find();
    return result;
});
const getSignleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductModel_1.ProductModel.find({ _id: id });
    return result;
});
const deleteAProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductModel_1.ProductModel.deleteOne({ _id: id });
    return result;
});
const updateAProductIntoDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ProductModel_1.ProductModel.findOneAndUpdate({ id }, { $set: data }, { new: true });
    return result;
});
exports.producServices = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSignleProductIntoDB,
    deleteAProductIntoDB,
    updateAProductIntoDB
};
