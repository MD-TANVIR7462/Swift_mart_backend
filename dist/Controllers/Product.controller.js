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
exports.productControllers = void 0;
const Product_services_1 = require("../Services/Product.services");
const creatProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield Product_services_1.producServices.createProductIntoDB(product);
        res.status(200).json({
            success: true,
            message: "product stored successfully in Database",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.productControllers = {
    creatProduct
};
