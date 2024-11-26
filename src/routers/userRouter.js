
import { Router } from "express";
import { createClienteController, getUserByIDController, deleteUserController, updateUserController } from "../controllers/userController.js";

import { verify } from "../middlewares/auth.js";

const router = Router();


//Usuarios

// rutas publicas
router.get("/users/:id", verify, getUserByIDController);
router.delete("/users/:id", verify, deleteUserController);
router.put("/users/:id", verify, updateUserController);

// ruta publica
router.post("/users", createClienteController)


export default router