"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../controller/LoginController");
const router = (0, express_1.Router)();
router.post("/", LoginController_1.LoginController.login); // Rota de Login
router.get("/profile", LoginController_1.LoginController.getProfiles); // retorna informações do usuario
exports.default = router;
