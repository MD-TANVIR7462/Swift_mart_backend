"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleModel = void 0;
const mongoose_1 = require("mongoose");
const UserRoleSchema = new mongoose_1.Schema({
    role: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});
exports.UserRoleModel = (0, mongoose_1.model)("user", UserRoleSchema);
