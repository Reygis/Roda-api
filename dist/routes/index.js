"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../controller/LoginController");
const UserController_1 = require("../controller/UserController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    res.send('testando');
});
routes.post("/user", new UserController_1.UserController().create); //Rota para criar Users
routes.post("/login", new LoginController_1.LoginController().login); // Rota de Login
routes.use(authMiddleware_1.authMiddleware); // todas as rotas abaixo deste Middleware precisarão de autenticação
routes.get("/alluser", UserController_1.UserController.listAllUser); //lista all users;
exports.default = routes;
