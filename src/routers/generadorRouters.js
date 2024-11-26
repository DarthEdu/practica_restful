import { Router } from "express";
import {
  createGeneradorController,
  getAllGeneradorController,
  getGeneradorByIDController,
  updateGeneradorController,
  deleteGeneradorController,
} from "../controllers/generadorController.js";

import { verify } from "../middlewares/auth.js";


const router = Router();


//publicas
router.get("/generador", getAllGeneradorController);
router.get("/generador/:id", getGeneradorByIDController)
router.post('/generador', createGeneradorController);


//privadas
router.put("/generador/:id", verify, updateGeneradorController);
router.delete("/generador/:id", verify, deleteGeneradorController)

export default router;
