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
}
exports.UserController = UserController;
_a = UserController;
UserController.create = async (req, res) => {
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
};
UserController.editUser = async (req, res) => {
    const { name, email, bio, imgurl } = req.body;
    const user = req.user;
    if (name)
        user.name = name;
    if (email)
        user.email = email;
    if (bio)
        user.bio = bio;
    if (imgurl)
        user.imgurl = imgurl;
    const errors = await (0, class_validator_1.validate)(user);
    if (errors.length > 0) {
        return res.status(400).send(errors);
    }
    try {
        await userRepository_1.userRepository.save(user);
    }
    catch (error) {
        return res.status(409);
    }
    return res.status(201).send("user edited");
};
UserController.userByName = async (req, res) => {
    const name = req.params.name;
    let users;
    try {
        users = await userRepository_1.userRepository
            .createQueryBuilder("user")
            .where("user.name like :name", { name: `%${name}%` })
            .getMany();
    }
    catch (error) {
        return res.status(404).send("User not found");
    }
    return res.send(users.map(item => ({ name: item.name, email: item.email, bio: item.bio, imgurl: item.imgurl })));
};
UserController.listAllUser = async (req, res) => {
    const users = await userRepository_1.userRepository.find({
        select: ["iduser", "name", "email", "bio", "imgurl"]
    });
    return res.send(users);
};
//   static userByEmail =  async (req: Request, res: Response) => {
//     const email: string = req.params.email
//     let user: User
//     try {
//         user = await userRepository.findOneByOrFail({email})
//     } catch (error) {
//         return res.status(404).send("User not found")            
//     }
//     return res.send(user)
//   }
