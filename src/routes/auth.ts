import { Router } from "express"
import { LoginController } from "../controller/LoginController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router()

router.post("/", LoginController.login) // Rota de Login
router.get("/profile", authMiddleware, LoginController.getProfiles) // retorna informações do usuario

export default router
