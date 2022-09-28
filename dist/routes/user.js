"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/", UserController_1.UserController.create); //Rota para criar Users
router.put("/edit", authMiddleware_1.authMiddleware, UserController_1.UserController.editUser); //Rota para editar o próprio usuario
router.get("/alluser", authMiddleware_1.authMiddleware, UserController_1.UserController.listAllUser); //lista all users;
router.get("/:name", authMiddleware_1.authMiddleware, UserController_1.UserController.userByName); //encontrar usuarios por nome;
exports.default = router;
