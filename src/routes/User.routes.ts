import { Router } from "express";
import { UserControllers } from "../Controllers/Usercontroller";

const router = Router();

router.post("/", UserControllers.creatUser);
router.get("/",UserControllers.getAllUser)
router.get("/:id",UserControllers.getSingleUser)
router.delete("/:id",UserControllers.deleteAUser);
router.put("/:id",UserControllers.updateAUser)

export const UserRouter = router;
