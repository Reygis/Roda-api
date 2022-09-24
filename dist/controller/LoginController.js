"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const userRepository_1 = require("./../repositories/userRepository");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class LoginController {
    async login(req, res) {
        var _a;
        const { email, password } = req.body;
        const user = await userRepository_1.userRepository.findOneBy({ email });
        if (!user) {
            return res.status(400).json({ message: "E-mail ou senha invalidos" });
        }
        const verifyPass = await bcryptjs_1.default.compare(password, user.password);
        if (!verifyPass) {
            return res.status(400).json({ message: "E-mail ou senha invalidos!" });
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.iduser
        }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "", { expiresIn: "4h" });
        const { password: _, ...userLogin } = user;
        return res.json({
            user: userLogin,
            token: token
        });
    }
    async getProfiles(req, res) {
        return res.json(req.user);
    }
}
exports.LoginController = LoginController;
//         return res.send({
//             token:token,
//             user:{iduser:user.iduser,
//             name:user.name,
//             email:user.email,
//             bio:user.bio,
//             imgscc:user.imgurl}
//         })
//     }
