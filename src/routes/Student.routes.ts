import { Router } from "express";
import { studentControllers } from "../Controllers/Student.controller";

const router = Router();

router.post("/", studentControllers.creatStudent);
router.get("/",studentControllers.getAllStudent)
router.get("/:id",studentControllers.getSingleStudent)
router.delete("/:id",studentControllers.deleteAstudent);
router.put("/:id",studentControllers.updateAstudent)

export const StudentRouter = router;
