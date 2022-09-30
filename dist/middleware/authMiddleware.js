"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const userRepository_1 = require("./../repositories/userRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (req, res, next) => {
    var _a;
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).json({ message: "O Usuário não está logado!" });
    }
    const token = authorization.split(" ")[1];
    let jwtPayload;
    try {
        jwtPayload = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "");
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        res.status(401).send;
    }
    if (!jwtPayload)
        return res.status(403).json({ message: "Não Autorizado" });
    const user = await userRepository_1.userRepository.findOneOrFail({ where: { iduser: jwtPayload.id } });
    if (!user) {
        return res.status(403).json({ message: "Não Autorizado" });
    }
    const { password: _, ...loggedUser } = user;
    req.user = loggedUser;
    next();
};
exports.authMiddleware = authMiddleware;
