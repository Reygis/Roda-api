import { Router } from "express"
import { LoginController } from "../controller/LoginController";

const router = Router()

router.post("/", LoginController.login) // Rota de Login
router.get("/profile", LoginController.getProfiles) // retorna informações do usuario

export default router