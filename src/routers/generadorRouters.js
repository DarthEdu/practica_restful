import { Router } from "express";
import {
  createGeneradorController,
  deleteTourController,
  getAllGeneradorController,
  getUserByIDController,
  getGeneradorByIDController,
  getPedidoByIDController,
  updateUserController,
  updateGeneradorController,
  updatePedidoController
} from "../controllers/generadorController.js";

const router = Router();

router.get("/generador", getAllGeneradorController);
router.get("/users/:id", getUserByIDController);
router.get("/generadores/:id", getGeneradorByIDController)
router.get("/pedidos/:id", getPedidoByIDController)
router.post('/generador', createGeneradorController);
router.put("/users/:id", updateUserController);
router.put("/generador/:id", updateGeneradorController);
router.put("/pedidos/:id", updatePedidoController);
router.delete("/tours/:id", deleteTourController);

export default router;
