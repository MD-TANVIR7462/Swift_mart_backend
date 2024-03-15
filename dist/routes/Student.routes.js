"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRouter = void 0;
const express_1 = require("express");
const Student_controller_1 = require("../Controllers/Student.controller");
const router = (0, express_1.Router)();
router.post("/", Student_controller_1.studentControllers.creatStudent);
router.get("/", Student_controller_1.studentControllers.getAllStudent);
router.get("/:id", Student_controller_1.studentControllers.getSingleStudent);
// router.delete("/")
// router.delete("/:id")
// router.put("/:id")
exports.StudentRouter = router;
