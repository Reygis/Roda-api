import { NextFunction, Request, Response } from "express";
import { userRepository } from './../repositories/userRepository';
import jwt from "jsonwebtoken";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    
    if (!authorization){
        return res.status(403).json({message: "O Usuário não está logado!"});
    }

    const token = authorization.split(" ")[1];

    let jwtPayload
    
    try {
        jwtPayload = <any>jwt.verify(token, process.env.JWT_PASS ?? "")
        res.locals.jwtPayload = jwtPayload
    } catch (error) {
        res.status(401).send
    }

    if (!jwtPayload) {
        return res.status(403).json({message: "Não Autorizado"})
    }
   
    const user = await userRepository.findOneOrFail({where:{iduser: jwtPayload.id}});

    if(!user) {
        return res.status(403).json({message: "Não Autorizado"});
    }
    
    const { password:_, ...loggedUser } = user;

    req.user = loggedUser

    next();
}