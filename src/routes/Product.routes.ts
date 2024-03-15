import { Router } from "express";
import { productControllers } from "../Controllers/Product.controller";


const router = Router();

router.post("/", productControllers.creatProduct);
router.get("/",productControllers.getAllProduct)
router.get("/:id",productControllers.getSingleProduct)
router.delete("/:id",productControllers.deleteAProduct);
router.put("/:id",productControllers.updateAProduct)

export const ProductRouter = router;
