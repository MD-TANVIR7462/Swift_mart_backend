import { Router } from "express";
import { studentControllers } from "../Controllers/Student.controller";

const router = Router();

router.post("/", studentControllers.creatStudent);
router.get("/",studentControllers.getAllStudent)
router.get("/:id",studentControllers.getSingleStudent)
// router.delete("/")
// router.delete("/:id")
// router.put("/:id")

export const StudentRouter = router;
