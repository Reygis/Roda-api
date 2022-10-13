"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GroupController_1 = require("../controller/GroupController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/create", authMiddleware_1.authMiddleware, GroupController_1.GroupController.create); // criar grupo
router.get("/allgroups", authMiddleware_1.authMiddleware, GroupController_1.GroupController.listAllGroups); //lista todos os grupos;
router.get("/mygroups", authMiddleware_1.authMiddleware, GroupController_1.GroupController.groupsOfUser); //lista todos os grupos do usuario logado;
exports.default = router;
