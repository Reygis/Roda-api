
import { Group } from '../entities/Group';
import { User } from './../entities/User';
import { Router, Request, Response } from "express"
import { LoginController } from "../controller/LoginController";
import { UserController } from "../controller/UserController";
import { GroupController } from './../controller/GroupController';
import { authMiddleware } from "../middleware/authMiddleware";


import user from './user'
import auth from './auth'
import book from './book'
import review from './review'

const routes = Router()


routes.get('/', (req:Request, res:Response)=>{
    res.send('testando')
})

routes.post("/user", new UserController().create) //Rota para criar Users
routes.post("/login", new LoginController().login) // Rota de Login
routes.get("/group", GroupController.listAllGroups) //Rota de listagem de todos os grupos


routes.use(authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação

routes.get("/alluser", UserController.listAllUser) //lista all users;
routes.post("/group", new GroupController().create)// Rota de criação de grupos

routes.use('/login',auth)
routes.use('/user', user)
routes.use('/book', book)
routes.use('/review', review)

export default routes