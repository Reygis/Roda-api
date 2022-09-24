import { User } from './../entities/User';
import { Router, Request, Response } from "express"
import { LoginController } from "../controller/LoginController";
import { UserController } from "../controller/UserController";
import { authMiddleware } from "../middleware/authMiddleware";


const routes = Router()

routes.get('/', (req:Request, res:Response)=>{
    res.send('testando')
})

routes.post("/user", new UserController().create) //Rota para criar Users
routes.post("/login", new LoginController().login) // Rota de Login

routes.use(authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação

routes.get("/alluser", UserController.listAllUser) //lista all users;

export default routes