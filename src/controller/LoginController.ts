import { userRepository } from './../repositories/userRepository';
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export class LoginController {
    static login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user = await userRepository.findOneBy({ email });

        if (!user) {
            return res.status(400).json({ message: "E-mail ou senha invalidos" });
        }

        const verifyPass = await bcrypt.compare(password, user.password)

        if (!verifyPass) {
            return res.status(400).json({ message: "E-mail ou senha invalidos!" });
        }

        const token = jwt.sign({
            id: user.iduser
        },
            process.env.JWT_PASS ?? "",
            { expiresIn: "4h" })

        const { password: _, ...userLogin } = user;

        return res.json({
            user: userLogin,
            token: token
        })
    }

    static getProfiles = async (req: Request, res: Response) => {

        return res.json(req.user);

    }
}
