import { Router } from "express";
import {
  createGeneradorController,
  getAllGeneradorController,
  getUserByIDController,
  getGeneradorByIDController,
  getPedidoByIDController,
  updateUserController,
  updateGeneradorController,
  updatePedidoController,
  deleteGeneradorController,
  deletePedidoController,
  deleteUserController
} from "../controllers/generadorController.js";

const router = Router();

router.get("/generador", getAllGeneradorController);
router.get("/users/:id", getUserByIDController);
router.get("/generador/:id", getGeneradorByIDController)
router.get("/pedidos/:id", getPedidoByIDController)
router.post('/generador', createGeneradorController);
router.put("/users/:id", updateUserController);
router.put("/generador/:id", updateGeneradorController);
router.put("/pedidos/:id", updatePedidoController);
router.delete("/users/:id", deleteUserController);
router.delete("/generador/:id", deleteGeneradorController)
router.delete("/pedidos/:id", deletePedidoController)

export default router;
