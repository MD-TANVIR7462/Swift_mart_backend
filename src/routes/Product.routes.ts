import { Router } from "express";
import { productControllers } from "../Controllers/Product.controller";


const router = Router();

router.post("/", productControllers.creatProduct);
router.get("/",)
router.get("/:id",)
router.delete("/:id",);
router.put("/:id",)

export const ProductRouter = router;
