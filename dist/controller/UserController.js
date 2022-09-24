"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userRepository_1 = require("../repositories/userRepository");
const class_validator_1 = require("class-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserController {
    async create(req, res) {
        const { name, email, password, bio, imgurl } = req.body;
        const userExists = await userRepository_1.userRepository.findOneBy({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email já cadastrado!" });
        }
        const hashPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = userRepository_1.userRepository.create({
            name,
            email,
            password: hashPassword,
            bio,
            imgurl
        });
        await userRepository_1.userRepository.save(newUser);
        const { password: _, ...user } = newUser;
        return res.status(201).send(user);
    }
}
exports.UserController = UserController;
_a = UserController;
UserController.editUser = async (req, res) => {
    const { name, email, password, bio, imgurl } = req.body;
    const idUser = parseInt(req.params.idUser);
    let user;
    try {
        user = await userRepository_1.userRepository.findOneByOrFail({ iduser: Number(idUser) });
    }
    catch (error) {
        return res.status(404).send("User not found");
    }
    if (name) {
        user.name = name;
    }
    if (email) {
        user.email = email;
    }
    if (password) {
        const newPassword = bcryptjs_1.default.hashSync(password, 10);
        user.password = newPassword;
    }
    if (bio) {
        user.bio = bio;
    }
    if (imgurl) {
        user.imgurl = imgurl;
    }
    const errors = await (0, class_validator_1.validate)(user);
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }
    try {
        await userRepository_1.userRepository.save(user);
    }
    catch (error) {
        return res.status(409).send("Email already in use");
    }
    return res.status(201).send("edited user");
};
UserController.userById = async (req, res) => {
    const iduser = parseInt(req.params.iduser, 10);
    let user;
    try {
        user = await userRepository_1.userRepository.findOneByOrFail({ iduser });
    }
    catch (error) {
        return res.status(404).send("User not found");
    }
    return res.send(user);
};
UserController.userByEmail = async (req, res) => {
    const email = req.params.email;
    let user;
    try {
        user = await userRepository_1.userRepository.findOneByOrFail({ email });
    }
    catch (error) {
        return res.status(404).send("User not found");
    }
    return res.send(user);
};
UserController.userByName = async (req, res) => {
    const name = req.params.email;
    let user;
    try {
        user = await userRepository_1.userRepository.findOneByOrFail({ name });
    }
    catch (error) {
        return res.status(404).send("User not found");
    }
    return res.send(user);
};
UserController.listAllUser = async (req, res) => {
    const users = await userRepository_1.userRepository.find({
        select: ["iduser", "name", "email", "bio", "imgurl"]
    });
    return res.send(users);
};
