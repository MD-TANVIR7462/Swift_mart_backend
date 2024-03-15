"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Student_routes_1 = require("./routes/Student.routes");
const Product_routes_1 = require("./routes/Product.routes");
const UserRole_routes_1 = require("./routes/UserRole.routes");
const app = (0, express_1.default)();
//*parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//*Routes.......
app.use("/api/student", Student_routes_1.StudentRouter);
app.use("/api/product", Product_routes_1.ProductRouter);
app.use("/api/role", UserRole_routes_1.UserRoleRouter);
//*Hellow Ricoz initial loading..........
app.get("/", (req, res) => {
    res.json("Hello RicoZ  ! ");
});
//*global error handler..
app.use((err, req, res, next) => {
    let message;
    let finalMessage;
    //  Cast error handelar//
    if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        (message = "Cast Error"), (finalMessage = `${err.value}is not a valid ID!`);
    }
    //Duplocate errror
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        (message = "Duplicate Entry"),
            (finalMessage = `${err.keyValue.title}  is already exists`);
    }
    //  Validation error
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        (message = "Validation Error"), (finalMessage = `${err.message}`);
    }
    res.status(500).json({
        success: false,
        ErrorType: message,
        errorMessage: finalMessage,
        errorDetails: err,
        stack: err.stack,
    });
});
exports.default = app;
