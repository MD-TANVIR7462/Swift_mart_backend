import { Router } from "express";
import { UserRoleControllers } from "../Controllers/UserRole.controller";

const router = Router();

router.post("/", UserRoleControllers.creatRole);
router.get("/", UserRoleControllers.getAllRole);
router.get("/:id", UserRoleControllers.getSingleRole);
router.delete("/:id", UserRoleControllers.deleteARole);
router.put("/:id", UserRoleControllers.updateARole);

export const UserRoleRouter = router;
